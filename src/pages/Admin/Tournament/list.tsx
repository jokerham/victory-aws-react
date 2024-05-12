// import { useNavigate } from 'react-router-dom'
// import { generateClient } from '@aws-amplify/api'
// import { Tournament } from 'API'
// import { deleteTournament } from 'graphql/mutations'
// import { FcInspection } from 'react-icons/fc'
// import { TbTournament } from 'react-icons/tb'
// import Article from 'component/article'
// import DataTable from 'component/dataTable'
// import { showToastMessage } from 'component/toastMessage'
// import "aws-exports"

// type ErrorObject = {
//   path: null;
//   locations: null;
//   message: string;
// }

// type ResponseData = {
//   data: null;
//   errors: ErrorObject[]
// }

// const TournamentListPage = () => {
//   const navigate = useNavigate()

//   const columns = [
//     { name: 'id', selector: (row: Tournament) => row.id, omit: true },
//     { name: '이름', selector: (row: Tournament) => row.title, sortable: true, grow: 2 },
//     { name: '주소', selector: (row: Tournament) => row.location, sortable: true, grow: 2 },
//     { name: '대회개최일', selector: (row: Tournament) => row.eventDate, sortable: true, grow: 1 },
//     { name: '참가신청마감일', selector: (row: Tournament) => row.dueDate, sortable: true, grow: 1 },
//     { name: '대회링수', selector: (row: Tournament) => row.rings, sortable: true, grow: 1 },
//   ]

//   const title = '단체 목록'
  
//   const onClickManageMatches = async(values: Tournament | [Tournament]) => {
//     if (!Array.isArray(values)) {
//       navigate(`/admin/tournament/matches/${values.id}`)
//     }
//   }

//   const onEdit = async (values: Tournament | [Tournament]) => {
//     if (!Array.isArray(values)) {
//       navigate(`/admin/tournament/${values.id}`)
//     }
//   }
  
//   const onDelete = async (values: Tournament | [Tournament]) => {
//     if (!Array.isArray(values)) {
//       const client = generateClient()
//       try {
//         await client.graphql({
//           query: deleteTournament,
//           variables: { input: {id: values.id} },
//           authMode: 'userPool'
//         })
//       } catch (e) {
//         for(const error of (e as ResponseData)?.errors) {
//           showToastMessage(error.message, "error")
//         }
//       }
//     }
//   }

//   const buttons = [
//     { name: 'createMatches', label: "대전관리", icon: (<TbTournament />), action: onClickManageMatches },
//     { name: 'edit', action: onEdit },
//     { name: 'delete', action: onDelete }
//   ]

//   return (
//     <main className="main">
//       <div className="page-header">
//         <div className="page-header__title">
//           <FcInspection />
//           단체 관리
//         </div>
//       </div>
//       <Article>
//         <DataTable
//           title={title}
//           columns={columns}
//           buttons={buttons}
//           graphqlFunction={"listTournaments"}
//           filterExpression=""
//           expressionAttributeValues={"{}"}
//           selectableRowsSingle={false}
//         />
//       </Article>
//     </main>
//   )
// }

// export default TournamentListPage

// // Refernece
// // - https://react-data-table-component.netlify.app/?path=/docs/api-props--page
// // - https://stackoverflow.com/questions/56106825/invoke-lambda-function-from-amplify-generated-react-app-without-using-api-gateway