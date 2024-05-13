import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { generateClient } from '@aws-amplify/api'
import { batchCreateMatches } from "graphql/mutations"
import { FormikValues } from "formik"
import * as yup from 'yup'
import { FcInspection } from 'react-icons/fc'
import FormBuilder, { TFormBuilderConfig } from 'component/formBuilder'
import Article from 'component/article'
import { showToastMessage } from 'component/toastMessage'
import { getCodeTableId, getCodeDetailOptions } from "services/codeTableHelper"
import 'configureAmplify'

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

type Option = {
  id: string,
  value: string
}

const CreateMatchPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [loading, setloading] = useState(true)
  const [config, setConfig] = useState<TFormBuilderConfig | null>(null)
  const [matchTypeOptions, setMatchTypeOptions] = useState<Option[]>([])
  const [tournamentTypeOptions, setTournamentTypeOptions] = useState<Option[]>([])
  const client = generateClient()
  const tournamentId = params.id

  useEffect(() => {
    const getCodeData = async() => {
      let id1: string = await getCodeTableId("대전 종별") ?? ""
      let options1: Option[] = await getCodeDetailOptions(id1)
      setMatchTypeOptions(options1)

      let id2: string = await getCodeTableId("경기 방식") ?? ""
      let options2: Option[] = await getCodeDetailOptions(id2)
      setTournamentTypeOptions(options2)
    }

    getCodeData()
  }, [])

  useEffect(() => {
    const initialValue = {
      tournamentId: tournamentId,
      matchType: '',
      tournamentType: '',
      duration: '120',
      rounds: '2',
      startWeight: '10',
      endWeight: '90',
      unit: '5',
    }

    const fields = () => {
      const fieldList = []

      fieldList.push({ id: 'tournamentId', fieldType: 'hidden'})
      fieldList.push({ id: 'matchType', fieldType: 'select', label: '대전 종별', options: matchTypeOptions })
      fieldList.push({ id: 'tournamentType', fieldType: 'select', label: '경기 방식', options: tournamentTypeOptions })
      fieldList.push({ id: 'duration', fieldType: 'number', label: '경기 시간' })
      fieldList.push({ id: 'rounds', fieldType: 'number', label: '라운드 횟수' })
      fieldList.push({ id: 'startWeight', fieldType: 'number', label: '시작 체급' })
      fieldList.push({ id: 'endWeight', fieldType: 'number', label: '종료 체급' })
      fieldList.push({ id: 'unit', fieldType: 'number', label: '체급간 간격' })
      
      return fieldList;
    }

    const validationSchema = yup.object().shape({
      matchType: yup.string().required('대전 종별을 선택해주새요.'),
      tournamentType: yup.string().required('경기 방식을 선택해주새요.'),
      duration: yup.number().required('경기 시간을 초단위로 입력해주새요.'),
      rounds: yup.number().required('경기 라운드 횟수를 입력해주새요.'),
      startWeight: yup.number().required('시작 체급을 Kg단위로 입력해주새요.'),
      endWeight: yup.number().required('종료 체급을 Kg단위로 입력해주새요.'),
      unit: yup.number().required('체급간 간격을 초단위로 입력해주새요.'),
    })

    const submitHandler = async(values: FormikValues) => {
      try {
        await validationSchema.validate(values, {abortEarly: false});
        await client.graphql({
          query: batchCreateMatches,
          variables: { input: {
            tournamentId: tournamentId ?? "",
            matchType: values.matchType,
            tournamentType: values.tournamentType,
            duration: values.duration,
            rounds: values.rounds,
            startWeight: values.startWeight,
            endWeight: values.endWeight,
            unit: values.unit
          } },
          authMode: 'userPool'
        })
        navigate(`/admin/tournament/matches/${tournamentId}`);
      } catch (e) {
        for(const error of (e as ResponseData)?.errors) {
          showToastMessage(error.message, "error")
        }

        for (const error of (e as ValidationError)?.errors) {
          showToastMessage(error, "error")
        }
      }
    }

    const config = {
      id: 'tournament',
      title: '대전 추가',
      fields: fields(),
      buttons: {
        submitEnabled: true,
        cancelEnabled: true
      },
      initialValues: initialValue,
      validationSchema: yup.object({}),
      submitHandler: submitHandler,
    } as unknown as TFormBuilderConfig

    setConfig(config)
    setloading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tournamentId, matchTypeOptions, tournamentTypeOptions])

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

export default CreateMatchPage