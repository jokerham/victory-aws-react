// import { useState, useEffect } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { generateClient } from '@aws-amplify/api'
// import { FormikValues } from 'formik'
// import * as yup from 'yup';
// import { v4 as uuid } from 'uuid'
// import { FcInspection } from 'react-icons/fc'
// import { getMatch } from "graphql/queries"
// import { getCodeTableId, getCodeDetailOptions } from "services/codeTableHelper"
// import { createMatch, updateMatch } from 'graphql/mutations'
// import FormBuilder, { TFormBuilderConfig } from 'component/formBuilder'
// import Article from 'component/article'
// import { showToastMessage } from 'component/toastMessage'
// import 'configureAmplify'

// type ErrorObject = {
//   path: null;
//   locations: null;
//   message: string;
// }

// type ValidationError = {
//   value: string,
//   errors: [string],
//   inner: any,
//   name: string,
//   message: string
// }

// type ResponseData = {
//   data: null;
//   errors: ErrorObject[]
// }

// type MatchDataTable = {
//   id: string,
//   tournamentId: string,
//   matchType: string,
//   weight: number,
//   tournamentType: string,
//   duration: number,
//   rounds: number 
// }

// type Option = {
//   id: string,
//   value: string
// }

// export default function MatchDetailPage () {
//   const params = useParams()
//   const navigate = useNavigate()
//   const [match, setMatch] = useState<MatchDataTable>({} as MatchDataTable)
//   const [loading, setloading] = useState(true)
//   const [config, setConfig] = useState<TFormBuilderConfig | null>(null)
//   const [matchTypeOptions, setMatchTypeOptions] = useState<Option[]>([])
//   const [tournamentTypeOptions, setTournamentTypeOptions] = useState<Option[]>([])
//   const client = generateClient()

//   useEffect(() => {
//     const getCodeData = async() => {
//       let id1: string = await getCodeTableId("대전 종별") ?? ""
//       let options1: Option[] = await getCodeDetailOptions(id1)
//       setMatchTypeOptions(options1)

//       let id2: string = await getCodeTableId("경기 방식") ?? ""
//       let options2: Option[] = await getCodeDetailOptions(id2)
//       setTournamentTypeOptions(options2)
//     }

//     getCodeData()
//   }, [])

//   /**
//    * Use Effect to update formik based on Match Data
//    */
//   useEffect(() => {
//     const submitHandler = async (values: FormikValues) => {
//       try {
//         await validationSchema.validate(values, { abortEarly: false });

//         if (match === null || match.id === undefined || match.id === null) {
//           const newData = {
//             id: uuid(),
//             tournamentId: values.tournamentId,
//             matchType: values.matchType,
//             weight: values.weight,
//             tournamentType: values.tournamentType,
//             duration: values.duration,
//             rounds: values.rounds,
//           }
//           await client.graphql({
//             query: createMatch,
//             variables: { input: newData },
//             authMode: 'userPool'
//           })
//         } else {
//           const updateData = {
//             id: values.id,
//             matchType: values.matchType,
//             weight: values.weight,
//             tournamentType: values.tournamentType,
//             duration: values.duration,
//             rounds: values.rounds,
//           }
//           console.log(updateData)
//           await client.graphql({
//             query: updateMatch,
//             variables: { input: updateData },
//             authMode: 'userPool'
//           })
//         }
//         navigate('/admin/tournament/matches/' + values.tournamentId);
//       } catch (e) {
//         for(const error of (e as ResponseData)?.errors) {
//           showToastMessage(error.message, "error")
//         }

//         for (const error of (e as ValidationError)?.errors) {
//           showToastMessage(error, "error")
//         }
//       }
//     }

//     const initialValue = {
//       id: '',
//       tournamentId: '',
//       matchType: '',
//       weight: '',
//       tournamentType: '',
//       duration: '',
//       rounds: '' 
//     }

//     const fields = () => {
//       const fieldList = []

//       fieldList.push({ id: 'id', fieldType: 'hidden' })
//       fieldList.push({ id: 'tournamentId', fieldType: 'hidden' })
//       fieldList.push({ id: 'matchType', fieldType: 'select', label: '대전 종별', options: matchTypeOptions })
//       fieldList.push({ id: 'tournamentType', fieldType: 'select', label: '경기 방식', options: tournamentTypeOptions })
//       fieldList.push({ id: 'duration', fieldType: 'text', label: '경기 시간' })
//       fieldList.push({ id: 'rounds', fieldType: 'text', label: '라운드 횟수' })
//       fieldList.push({ id: 'weight', fieldType: 'text', label: '체급' })
      
//       return fieldList;
//     }

//     const validationSchema = yup.object().shape({
//       matchType: yup.string().required('대전 종별을 선택해주새요.'),
//       tournamentType: yup.string().required('경기 방식을 선택해주새요.'),
//       duration: yup.number().required('경기 시간을 초단위로 입력해주새요.'),
//       rounds: yup.number().required('경기 라운드 횟수를 입력해주새요.'),
//       weight: yup.number().required('체급을 Kg단위로 입력해주새요.'),
//     })

//     const config = {
//       id: 'match',
//       title: 
//         match === undefined || 
//         match === null || 
//         match.id === undefined || 
//         match.id === null ? '신규 단체 추가' : '단체 정보 변경',
//       fields: fields(),
//       buttons: {
//         submitEnabled: true,
//         cancelEnabled: true
//       },
//       initialValues: match ?? initialValue,
//       validationSchema: yup.object({}),
//       submitHandler: submitHandler,
//     } as TFormBuilderConfig

//     setConfig(config)
//     setloading(false)
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [match, matchTypeOptions, tournamentTypeOptions])

//   /**
//    * Use Effect to get Institute Data from Params
//    */
//   useEffect(() => {
//     const getMatchById = async (id: string) => {
//       const matchData: any = await client.graphql({
//         query: getMatch,
//         variables: {id}
//       })
//       const match: MatchDataTable = matchData.data.getMatch
//       setMatch(match)
//     }

//     if (params !== undefined && params.id !== undefined) {
//       getMatchById(params.id)
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [params])

//   if (loading || config===null) {
//     return (
//       <div />
//     )
//   } else {
//     return (
//       <main className="main">
//         <div className="page-header">
//           <div className="page-header__title">
//             <FcInspection />
//             대회 관리
//           </div>
//         </div>
//         <Article>
//           <FormBuilder
//             config={config}
//           />
//         </Article>
//       </main>
//     )
//   }
// }
