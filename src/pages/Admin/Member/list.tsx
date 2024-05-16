import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FcInspection } from 'react-icons/fc'
import { FiUpload } from "react-icons/fi";
import { generateClient } from '@aws-amplify/api'
import { listInstitutes } from 'graphql/queries';
import { listMembersByApprovedWithInstituteTitle } from 'graphql/customQueries';
import { deleteMember, createMember, updateMember } from 'graphql/mutations'
import * as XLSX from 'xlsx'
import { Article, DataTable, FileUploader, showToastMessage } from 'component'
import "aws-exports"
import { getCodeDetailOptions } from 'services/codeTableHelper';

type ErrorObject = {
  path: null,
  locations: null,
  message: string,
}

type ResponseData = {
  data: null,
  errors: ErrorObject[]
}

type MemberDataTable = {
  id: string,
  congnitoId: string,
  name: string,
  email: string,
  contact: string,
  institute: {
    title: string
  },
  weight: number,
  gender: {
    name: string
  },
  birthday: Date,
  approved: string,
  profileImageUrl: string,
}

type MemberCsvRecord = {
  name: string,
  email: string,
  contact?: string,
  instituteName?: string,
  instituteLocation?: string,
  genderName?: string,
  birthday?: string,
}

const MemberListPage = ({params}: {params: {approved: string}}) => {
  const navigate = useNavigate()
  const approved = params.approved
  const [refreshKey, setRefreshKey] = useState(0)
  const [isFilePopupOpen, setIsFilePopupOpen] = useState(false)

  const columns = [
    { name: 'id', selector: (row: MemberDataTable) => row.id, omit: true },
    { name: '이름', selector: (row: MemberDataTable) => row.name, sortable: true, grow: 1 },
    { name: '단체', selector: (row: MemberDataTable) => row.institute?.title, sortable: true, grow: 1 },
    { name: '생일', selector: (row: MemberDataTable) => row.birthday, sortable: true, grow: 1 },
    { name: '성별', selector: (row: MemberDataTable) => row.gender?.name, sortable: true, grow: 1 },
    { name: '이메일', selector: (row: MemberDataTable) => row.email, sortable: true, grow: 1 },
    { name: '연락처', selector: (row: MemberDataTable) => row.contact, sortable: true, grow: 1 },
  ];

  const title = ( approved === 'approved') ?
    '승인 회원 목록' : 
    '미승인 회원 목록';
  
  const onEdit = async (values: MemberDataTable | [MemberDataTable]) => {
    if (!Array.isArray(values)) {
      navigate(`/admin/member/${values.id}`)
    }
  }
  
  const onDelete = async (values: MemberDataTable | [MemberDataTable]) => {
    if (!Array.isArray(values)) { values = [values] }
    const client = generateClient()
    const createPromises = values.map(async (value) => {
      await client.graphql({
        query: deleteMember,
        variables: { input: {id: value.id }},
        authMode: 'userPool'
      })
    })

    try {
      await Promise.all(createPromises)
      setRefreshKey(refreshKey+1)
    } catch (e) {
      for(const error of (e as ResponseData)?.errors) {
        showToastMessage(error.message, "error")
      }
    }
  }

  const onApprove = async (values: MemberDataTable | [MemberDataTable]) => {
    if (!Array.isArray(values)) { values = [values] }
    const client = generateClient()
    const createPromises = values.map(async (value) => {
      await client.graphql({
        query: updateMember,
        variables: { input: { id: value.id, approved: 'True' } },
        authMode: 'userPool'
      })
    })

    try {
      await Promise.all(createPromises)
      setRefreshKey(refreshKey+1)
    } catch (e) {
      for(const error of (e as ResponseData)?.errors) {
        showToastMessage(error.message, "error")
      }
    }
  }

  const onImport = async () => {
    setIsFilePopupOpen(true)
  }

  const onClose = () => {
    setIsFilePopupOpen(false)
  }

  const onFileUpload = async (file: File) => {
    if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
      showToastMessage("[" + file.name + "]은 엑셀파일이 아닙니다.", "error")
      return
    }

    const reader = new FileReader();
    reader.onload = async (e: ProgressEvent<FileReader>) => {
      if (e.target && e.target.result instanceof ArrayBuffer) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData: any[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  
        // Assuming first row as keys and rest as values
        const [keys, ...values] = jsonData;

        const members = values.map((row: any[]) => {
          let obj: MemberCsvRecord = {name: '', email: '', genderName: ''};
          keys.forEach((key, index) => {
            if (["name","email","contact","instituteName","instituteLocation","genderName","birthday"].includes(key)) {
              // eslint-disable-next-line no-eval
              eval("obj."+key+"=row[index]")
            }
          });
          return obj
        });

        const client = generateClient()
        let institutes = await client.graphql({
          query: listInstitutes,
          authMode: 'userPool'
        })
        const genders = await getCodeDetailOptions('gender')
        const createPromises = members.map(async (member) => {
          let newMember = {...member, approved: "approved", memberInstituteId: '', memberGenderId: ''}

          // find institute id
          if (member.instituteName !== '' && member.instituteLocation !== '') {
            const institute = institutes.data.listInstitutes.items.find(
              obj => obj.title === member.instituteName && obj.location === member.instituteLocation)
            if (institute) {
              newMember.memberInstituteId = institute.id
            }
          }
          // find gender
          if (member.genderName !== '') {
            const gender = genders.find(obj => 
              obj.value === member.genderName
            )
            if (gender) {
              newMember.memberGenderId = gender.id
            }
          }

          // cast birthday
          delete newMember.instituteName
          delete newMember.instituteLocation
          delete newMember.genderName

          await client.graphql({
            query: createMember,
            variables: { input: newMember },
            authMode: 'userPool'
          })
        })
        
        try {
          await Promise.all(createPromises)
        } catch (error) {
          console.log(error)
        }
        setRefreshKey(refreshKey+1)
      }
    };
    reader.readAsArrayBuffer(file);
  }

  const buttons = (approved === "approved") ? 
    [
      { name: 'uploadExcel', label: "엑셀업로드", icon: (<FiUpload />), action: onImport, toggleOnSelect: false },
      { name: 'edit', action: onEdit },
      { name: 'delete', action: onDelete }
    ] : [
      { name: 'approve', action: onApprove }
    ]

  const graphqlOption = {
    query: listMembersByApprovedWithInstituteTitle,
    options: {
      approved: approved ?? "unapproved"
    },
    name: "listMembersByApproved"
  }

  const sortBy = ["name","location"]
  
  return (
    <main className="main">
      <div className="page-header">
        <div className="page-header__title">
          <FcInspection />
          회원 관리
        </div>
      </div>
      <Article>
        <DataTable
          key={refreshKey}
          title={title}
          columns={columns}
          buttons={buttons}
          graphqlOption={graphqlOption}
          sortBy={sortBy}
          selectableRowsSingle={false}
        />
      </Article>
      {isFilePopupOpen && <FileUploader onClose={onClose} onFileUpload={onFileUpload} />}
    </main>
  )
}

export default MemberListPage

// Refernece
// - https://react-data-table-component.netlify.app/?path=/docs/api-props--page
// - https://stackoverflow.com/questions/56106825/invoke-lambda-function-from-amplify-generated-react-app-without-using-api-gateway