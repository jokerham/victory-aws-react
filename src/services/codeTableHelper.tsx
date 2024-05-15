import { generateClient } from '@aws-amplify/api'
import { listCodeTables, listCodeDetails } from 'graphql/queries'
import 'configureAmplify'

type CodeDetailOption = {
  id: string,
  value: string,
  sortOrder: number
}

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
  return items.length > 0 ? items[0].id : null
}

const getCodeDetailOptions = async function(codeTableName: string) {
  const client = generateClient()
  const codeTableId = await getCodeTableId(codeTableName)
  //console.log(codeTableId)
  const codeDetails = await client.graphql({
    query: listCodeDetails,
    variables: {
      filter: {
        codeTableDetailsId: { eq: codeTableId }
      }
    }
  })

  const items = codeDetails.data.listCodeDetails.items
  //console.log(items)

  let codeDetailOptions: CodeDetailOption[] = items.length === 0 ?
    [] : items.map(item => (
    {
      id: item.id,
      value: item.name,
      sortOrder: item.sortOrder
    }
  ))

  codeDetailOptions.sort((a, b) => a.sortOrder - b.sortOrder)
  return codeDetailOptions
}

export { getCodeTableId, getCodeDetailOptions }
export type { CodeDetailOption }