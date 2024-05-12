import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { generateClient } from '@aws-amplify/api'
import { uploadData } from 'aws-amplify/storage'
import { FormikValues } from 'formik'
import * as yup from 'yup'
import { v4 as uuid } from 'uuid'
import { FcInspection } from 'react-icons/fc'
import { getMember } from "graphql/queries"
import { createMember, updateMember } from 'graphql/mutations'
import { Article, FormBuilder, InstituteSelector, TFormBuilderConfig, showToastMessage } from 'component'
import 'configureAmplify'
import { Member } from 'API'

type ErrorObject = {
  path: null;
  locations: null;
  message: string;
}

type ValidationError = {
  value: string,
  errors: [string],
  inner: any,
  name: string,
  message: string
}

type ResponseData = {
  data: null;
  errors: ErrorObject[]
}

export default function MemberDetailPage () {
  const params = useParams()
  const navigate = useNavigate()
  const [member, setMember] = useState<Member>({} as Member)
  const [loading, setloading] = useState(true)
  const [config, setConfig] = useState<TFormBuilderConfig | null>(null)
  
  /**
   * Use Effect to update formik based on Member Data
   */
  useEffect(() => {
    const submitHandler = async (values: FormikValues) => {
      try {
        const client = generateClient()
        await validationSchema.validate(values, { abortEarly: false });

        const profileImageUrl = await profileImage(values)
        const weight = parseFloat(values.weight)
        
        if (member === null || member.id === undefined || member.id === null) {
          const newMember = {
            name: values.name,
            email: values.email,
            contact: values.contact,
            memberInstituteId: values.institute.id,
            weight: isNaN(weight) ? 0 : weight,
            approved: "unapproved",
            profileImageUrl: profileImageUrl ?? undefined
          }
          await client.graphql({
            query: createMember,
            variables: {
              input: newMember
            },
            authMode: 'userPool'
          })
          navigate('/admin/member/unapproved')
        } else {
          const uptMember = {
            id: member.id,
            name: values.name,
            email: values.email,
            contact: values.contact,
            memberInstituteId: values.institute.id,
            weight: isNaN(weight) ? 0 : weight,
            approved: values.approved,
            profileImageUrl: profileImageUrl ?? member.profileImageUrl
          }
          console.log(uptMember);
          await client.graphql({
            query: updateMember,
            variables: {
              input: uptMember
            },
            authMode: 'userPool'
          })
          navigate('/admin/member/approved')
        }
      } catch (e) {
        for(const error of (e as ResponseData)?.errors) {
          showToastMessage(error.message, "error")
        }

        for (const error of (e as ValidationError)?.errors) {
          showToastMessage(error, "error")
        }
      }
    }

    const initialValue = {
      id: '',
      name: '',
      email: '',
      contact: '',
      institute: {
        id: '',
        title: '',
      },
      weight: 0,
      approved: 'false',
      profileImageUrl: ''
    }

    const fields = () => {
      const fieldList = []

      fieldList.push({ id: 'id', fieldType: 'hidden' })
      fieldList.push({ id: 'name', fieldType: 'text', label: '이름' })
      fieldList.push({ id: 'email', fieldType: 'text', label: '이메일' })
      fieldList.push({ id: 'contact', fieldType: 'text', label: '연락처' })
      fieldList.push({ id: 'institute.id', fieldType: 'hidden' })
      fieldList.push({ id: 'institute.title', fieldType: 'popup', label: '단체명', options: ["institute.id"], popup: (InstituteSelector) })
      fieldList.push({ id: 'weight', fieldType: 'text', label: '체급' })

      if (member === null || member.id === undefined || member.id === null) {
        fieldList.push({ id: 'approved', fieldType: 'hidden' })
      } else {
        fieldList.push({ id: 'approved', fieldType: 'radiobutton', label: '승인',
          options: [{id: 'approved', value: '승인'},{id: 'unapproved', value: '미승인'}] })
      }
      fieldList.push({ id: 'profileImage', fieldType: 'file', label: '프로파일 사진' })
      
      return fieldList;
    }

    const validationSchema = yup.object().shape({
      name: yup.string().required('이름을 입력해주새요.'),
      email: yup.string().email('이메일 형식으로 입력해주세요.').required('이메일을 입력해주새요.')
    });

    const config = {
      id: 'member',
      title: 
        member === null ||
        member.id === undefined || 
        member.id === null ? '신규 회원 추가' : '회원 정보 변경',
      fields: fields(),
      buttons: {
        submitEnabled: true,
        cancelEnabled: true
      },
      initialValues: member ?? initialValue,
      validationSchema: yup.object({}),
      submitHandler: submitHandler,
    } as TFormBuilderConfig

    const profileImage = async(values: FormikValues) => {
      if (values.profileImage) {
        const imageName = values.profileImage.name;
        const imageKey = `${imageName}_${uuid()}`;
        try {
          await uploadData({
            key: imageKey,
            data: values.image,
            options: {
              accessLevel: 'guest'
            }
          });
          return imageKey
        } catch(error) {
          console.log(error)
          return null
        }
      } 
      return null
    }

    setConfig(config)
    setloading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [member])

  /**
   * Use Effect to get Member Data from Params
   */
  useEffect(() => {
    const getMemberById = async (id: string) => {
      const client = generateClient()
      const memberData: any = await client.graphql({
        query: getMember,
        variables: {id: id}
      })
      const member = memberData.data.getMember
      setMember(member)
    }

    if (params !== undefined && params.id !== undefined) {
      getMemberById(params.id)
    }
  }, [params])

  if (loading || config===null) {
    return (
      <div />
    )
  } else {
    return (
      <main className="main">
        <div className="page-header">
          <div className="page-header__title">
            <FcInspection />
            회원 관리
          </div>
        </div>
        <Article>
          <FormBuilder
            config={config}
          />
        </Article>
      </main>
    )
  }
}
