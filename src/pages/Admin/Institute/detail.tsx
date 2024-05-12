import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { generateClient } from '@aws-amplify/api'
import { FormikValues } from 'formik'
import * as yup from 'yup';
import { FcInspection } from 'react-icons/fc'
import { getInstitute } from 'graphql/queries'
import { createInstitute, updateInstitute } from 'graphql/mutations'
import { Article, FormBuilder, MemberSelector, TFormBuilderConfig, showToastMessage } from 'component'
import 'configureAmplify'
import { Institute } from 'API';

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

export default function InstituteDetailPage () {
  const params = useParams()
  const navigate = useNavigate()
  const [institute, setInstitute] = useState<Institute>({} as Institute)
  const [loading, setloading] = useState(true)
  const [config, setConfig] = useState<TFormBuilderConfig | null>(null)
  
  /**
   * Use Effect to update formik based on Institute Data
   */
  useEffect(() => {
    const submitHandler = async (values: FormikValues) => {
      try {
        const client = generateClient()
        await validationSchema.validate(values, { abortEarly: false });

        if (institute === null || institute.id === undefined || institute.id === null) {
          const newInstituteData = {
            sport: 'boxing',
            title: values.title,
            location: values.location,
            instituteRepresentativeId: values.representative.id,
          }
          await client.graphql({
            query: createInstitute,
            variables: { input: newInstituteData },
            authMode: 'userPool'
          })
        } else {
          const updateInstituteData = {
            id: institute.id,
            sport: 'boxing',
            title: values.title,
            location: values.location,
            instituteRepresentativeId: values.representative.id,
          }
          console.log(updateInstituteData)
          await client.graphql({
            query: updateInstitute,
            variables: { input: updateInstituteData },
            authMode: 'userPool'
          })
        }
        navigate('/admin/institute');
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
      title: '',
      location: '',
      representative: {
        id: '',
        name: ''
      }
    }

    const fields = () => {
      const fieldList = []

      fieldList.push({ id: 'id', fieldType: 'hidden' })
      fieldList.push({ id: 'title', fieldType: 'text', label: '단체명' })
      fieldList.push({ id: 'location', fieldType: 'text', label: '주소' })
      fieldList.push({ id: 'representative.id', fieldType: 'hidden' })
      fieldList.push({ id: 'representative.name', fieldType: 'popup', label: '대표자', options: ["representative.id"], popup: (MemberSelector) })
      
      return fieldList;
    }

    const validationSchema = yup.object().shape({
      title: yup.string().required('단체명을 입력해주새요.'),
      location: yup.string().required('주소를 입력해주새요.')
    })

    const config = {
      id: 'institute',
      title: 
        institute === undefined || 
        institute === null || 
        institute.id === undefined || 
        institute.id === null ? '신규 단체 추가' : '단체 정보 변경',
      fields: fields(),
      buttons: {
        submitEnabled: true,
        cancelEnabled: true
      },
      initialValues: institute ?? initialValue,
      validationSchema: yup.object({}),
      submitHandler: submitHandler,
    } as TFormBuilderConfig

    setConfig(config)
    setloading(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [institute])

  /**
   * Use Effect to get Institute Data from Params
   */
  useEffect(() => {
    const client = generateClient()
    const getInstituteById = async (id: string) => {
      const instituteData: any = await client.graphql({
        query: getInstitute,
        variables: {id: id}
      })
      console.log(instituteData)
      const institute = instituteData.data.getInstitute
      setInstitute(institute)
    }

    if (params !== undefined && params.id !== undefined) {
      getInstituteById(params.id)
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
            대회 관리
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
