// import { generateClient } from '@aws-amplify/api'
// import { getCodeTable, listCodeDetail } from 'graphql/queries'
// import 'configureAmplify'

// const getCodeTableId = async function(name: string) {
//   const client = generateClient()
//   const codeTable = await client.graphql({
//     query: getCodeTable,
//     variables: { name }
//   })

//   const items = codeTable.data.getCodeTable.items
//   return items.length > 0 ? items[0].id : null;
// }

// const getCodeDetailOptions = async function(codeTableId: string) {
//   const client = generateClient()
//   const codeDetails = await client.graphql({
//     query: listCodeDetail,
//     variables: { codeTableId }
//   })

//   const items = codeDetails.data.listCodeDetailByCodeTable.items

//   return items.length === 0 ?
//     [] : items.map(item => (
//     {
//       id: item.id,
//       value: item.name,
//       sortOrder: item.sortOrder
//     }
//   )
// )

  
// }

// export { getCodeTableId, getCodeDetailOptions }