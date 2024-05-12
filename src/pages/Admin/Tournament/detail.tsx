// import { useState, useEffect } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { generateClient } from '@aws-amplify/api'
// import { getTournament } from "graphql/queries"
// import { createTournament, updateTournament } from 'graphql/mutations'
// import { Tournament } from 'API'
// import { FormikValues } from 'formik'
// import * as yup from 'yup'
// import { v4 as uuid } from 'uuid'
// import { FcInspection } from 'react-icons/fc'
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

// export default function TournamentDetailPage () {
//   const params = useParams()
//   const navigate = useNavigate()
//   const [tournament, setTournament] = useState<Tournament>({} as Tournament)
//   const [loading, setloading] = useState(true)
//   const [config, setConfig] = useState<TFormBuilderConfig | null>(null)
//   const client = generateClient()

//   /**
//    * Use Effect to update formik based on Institute Data
//    */
//   useEffect(() => {
//     const submitHandler = async (values: FormikValues) => {
//       try {
//         await validationSchema.validate(values, { abortEarly: false });

//         if (tournament === null || tournament.id === undefined || tournament.id === null) {
//           const newTournamentData = {
//             id: uuid(),
//             title: values.title,
//             location: values.location,
//             eventDate: values.eventDate,
//             dueDate: values.dueDate,
//             rings: values.rings,
//           }
//           await client.graphql({
//             query: createTournament,
//             variables: { input: newTournamentData },
//             authMode: 'userPool'
//           })
//         } else {
//           const updateTournamentData = {
//             id: tournament.id,
//             title: values.title,
//             location: values.location,
//             eventDate: values.eventDate,
//             dueDate: values.dueDate,
//             rings: values.rings,
//           }
//           console.log(updateTournamentData)
//           await client.graphql({
//             query: updateTournament,
//             variables: { input: updateTournamentData },
//             authMode: 'userPool'
//           })
//         }
//         navigate('/admin/tournament/list');
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
//       title: '',
//       location: '',
//       eventDate: '',
//       dueDate: '',
//       rings: '',
//     }

//     const fields = () => {
//       const fieldList = []

//       fieldList.push({ id: 'id', fieldType: 'hidden' })
//       fieldList.push({ id: 'title', fieldType: 'text', label: '단체명' })
//       fieldList.push({ id: 'location', fieldType: 'text', label: '주소' })
//       fieldList.push({ id: 'eventDate', fieldType: 'date', label: '대회개최일' })
//       fieldList.push({ id: 'dueDate', fieldType: 'date', label: '참가신청마감일' })
//       fieldList.push({ id: 'rings', fieldType: 'number', label: '대회링수' })
      
//       return fieldList;
//     }

//     const validationSchema = yup.object().shape({
//       title: yup.string().required('단체명을 입력해주새요.'),
//       location: yup.string().required('주소를 입력해주새요.'),
//       eventDate: yup.date().required('대회개최일을 입력해주새요.'),
//       dueDate: yup.date().required('참가신청마감일을 입력해주새요.'),
//       rings: yup.number().required('대회링수를 입력해주새요.')
//     })

//     const config = {
//       id: 'tournament',
//       title: 
//         tournament === undefined || 
//         tournament === null || 
//         tournament.id === undefined || 
//         tournament.id === null ? '신규 대회 추가' : '대회 정보 변경',
//       fields: fields(),
//       buttons: {
//         submitEnabled: true,
//         cancelEnabled: true
//       },
//       initialValues: tournament ?? initialValue,
//       validationSchema: yup.object({}),
//       submitHandler: submitHandler,
//     } as TFormBuilderConfig

//     setConfig(config)
//     setloading(false)
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [tournament])

//   /**
//    * Use Effect to get Institute Data from Params
//    */
//   useEffect(() => {
//     const getTournamentById = async (id: string) => {
//       const tournamentData: any = await client.graphql({
//         query: getTournament,
//         variables: {id}
//       })
//       const tournament: Tournament = tournamentData.data.getTournament
//       console.log(tournament)
//       setTournament(tournament)
//     }

//     if (params !== undefined && params.id !== undefined) {
//       getTournamentById(params.id)
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
