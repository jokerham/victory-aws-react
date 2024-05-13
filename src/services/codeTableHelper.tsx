import { generateClient } from '@aws-amplify/api'
import { listCodeTables, listCodeDetails } from 'graphql/queries'
import 'configureAmplify'

const getCodeTableId = async function(name: string) {
  const client = generateClient()
  const codeTable = await client.graphql({
    query: listCodeTables,
    variables: {
      filter: {
        name: {eq: name}
      }
    }
  })

  const items = codeTable.data.listCodeTables.items
  return items.length > 0 ? items[0].id : null;
}

const getCodeDetailOptions = async function(codeTableId: string) {
  const client = generateClient()
  const codeDetails = await client.graphql({
    query: listCodeDetails,
    variables: {
      filter: {
        codeTableDetailsId: { eq: codeTableId }
      }
    }
  })

  const items = codeDetails.data.listCodeDetails.items

  return items.length === 0 ?
    [] : items.map(item => (
    {
      id: item.id,
      value: item.name,
      sortOrder: item.sortOrder
    }
  )
)

  
}

export { getCodeTableId, getCodeDetailOptions }