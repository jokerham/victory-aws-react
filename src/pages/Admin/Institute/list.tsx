import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FcInspection } from 'react-icons/fc'
import { FiUpload } from "react-icons/fi";
import * as XLSX from 'xlsx'
import { generateClient } from '@aws-amplify/api'
import { listInstitutesWithRepresentativeName } from 'graphql/customQueries';
import { deleteInstitute, createInstitute } from 'graphql/mutations'
import { Article, DataTable, FileUploader, showToastMessage } from 'component'
import "aws-exports"

type ErrorObject = {
  path: null;
  locations: null;
  message: string;
}

type ResponseData = {
  data: null;
  errors: ErrorObject[]
}

type InstituteDataTable = {
  id: string,
  sport: string,
  title: string,
  location: string,
  representative: {
    name: string
  },
}

const InstituteListPage = () => {
  const navigate = useNavigate();
  const [refreshKey, setRefreshKey] = useState(0)
  const [isFilePopupOpen, setIsFilePopupOpen] = useState(false)

  const columns = [
    { name: 'id', selector: (row: InstituteDataTable) => row.id, omit: true },
    { name: '이름', selector: (row: InstituteDataTable) => row.title, sortable: true, grow: 1 },
    { name: '대표자', selector: (row: InstituteDataTable) => row.representative?.name, sortable: true, grow: 1 },
    { name: '주소', selector: (row: InstituteDataTable) => row.location, sortable: true, grow: 1 },
  ]

  const title = '단체 목록'
  
  const onEdit = async (values: InstituteDataTable | [InstituteDataTable]) => {
    if (!Array.isArray(values)) {
      navigate(`/admin/institute/${values.id}`)
    }
  }
  
  const onDelete = async (values: InstituteDataTable | [InstituteDataTable]) => {
    if (!Array.isArray(values)) { values = [values] }
    const client = generateClient()
    const createPromises = values.map(async (value) => {
      await client.graphql({
        query: deleteInstitute,
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
        const institutes = values.map((row: any[]) => {
          let obj = {sport: "boxing", title: "", location: ""};
          keys.forEach((key, index) => {
            switch(key) {
              case "title":
                obj["title"] = row[index]
                break;
              case "location":
                obj["location"] = row[index]
                break;
            }
          });
          return obj;
        });

        const client = generateClient()
        const createPromises = institutes.map(async (institute) => {
          await client.graphql({
            query: createInstitute,
            variables: { input: institute },
            authMode: 'userPool'
          })
        })

        await Promise.all(createPromises)
        setRefreshKey(refreshKey+1)
      }
    };
    reader.readAsArrayBuffer(file);
  }

  const buttons = [
    { name: 'uploadExcel', label: "엑셀업로드", icon: (<FiUpload />), action: onImport, toggleOnSelect: false },
    { name: 'edit', action: onEdit },
    { name: 'delete', action: onDelete }
  ]

  const graphqlOption = {
    query: listInstitutesWithRepresentativeName,
    options: {
      filterExpression: "#sport = :sport",
      expressionAttributeNames: {"#sport": "sport"},
      expressionAttributeValues: { ":sport": "boxing" }
    },
    name: "listInstitutes"
  }

  const sortBy = ["title","location"]

  return (
    <main className="main">
      <div className="page-header">
        <div className="page-header__title">
          <FcInspection />
          단체 관리
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

export default InstituteListPage

// Refernece
// - https://react-data-table-component.netlify.app/?path=/docs/api-props--page
// - https://stackoverflow.com/questions/56106825/invoke-lambda-function-from-amplify-generated-react-app-without-using-api-gateway