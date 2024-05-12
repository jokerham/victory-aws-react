// import { useState, useEffect, ReactNode } from 'react'
// import DataTable from 'react-data-table-component'
// import Checkbox from "@mui/material/Checkbox"
// import ReactLoading from 'react-loading'
// import { generateClient } from '@aws-amplify/api';
// import { listMembers, listInstitutes, listTournaments, listMatches } from 'graphql/queries'
// import ArticleCard from 'component/article/card'
// import DataTableButtons from './dataTableButtons'
// import 'configureAmplify'
// import { getCodeDetailOptions, getCodeTableId } from 'services/codeTableHelper';

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const graphqlFunctionMapping = {
//   "listDataTableMembers": listMembers,
//   "listDataTableInstitutes": listInstitutes,
//   "listTournaments": listTournaments,
//   "listMatches": listMatches,
// }

// export interface ICodeTableMapping {
//   column: string,
//   codeTable: string
// }

// export interface IDataTableProps {
//   title: string
//   columns: any[]
//   buttons: any
//   graphqlFunction: string
//   codeTableMapping?: ICodeTableMapping[]
//   sortBy?: string[]
//   page?: number
//   perPage?: number
//   filterExpression: string
//   expressionAttributeValues: string
//   selectableRowsSingle: boolean
// }

// const DataTableComponent = (props: IDataTableProps) => {
//   const {
//     title, columns, buttons, graphqlFunction, codeTableMapping, sortBy, page, perPage, filterExpression, expressionAttributeValues, selectableRowsSingle
//   } = props

//   const [pending, setPending] = useState(true)
//   const [currentPage, setCurrentPage] = useState(page)
//   const [currentRowsPerPage, setCurrentRowsPerPage] = useState(perPage)
//   const [data, setData] = useState<any[]>([])
//   const [editButtonDisabled, setEditButtonDisabled] = useState(true);
//   const [paginationServer, setPaginationServer] = useState(false);
//   const [paginationTotalRows, setPaginationTotalRows] = useState(0);
//   const [rowValue, setRowValue] = useState<{} | [{}]>({});
//   const client = generateClient();

//   const NoData = () => {
//     return (
//       <div className='page-body__card_datatable_noData'>
//         조회 할 데이터 없습니다.
//       </div>
//     );
//   }

//   const handleSelectedRowChange = (selected: {allSelected: boolean, selectedCount: number, selectedRows: number[]}) => {
//     setEditButtonDisabled(selected.selectedCount === 0)
//     const rowValue = 
//       selected.selectedCount === 0 ? {} :
//       selected.selectedCount === 1 ? selected.selectedRows[0] : 
//       selected.selectedRows
//     setRowValue(rowValue)
//   }

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page)
//   }

//   useEffect(() => {
//     const fetchData = async () => {

//       // eslint-disable-next-line no-eval
//       let query = eval("graphqlFunctionMapping." + graphqlFunction);

//       if (query) {
//         setPending(true)
//         try {
//           // eslint-disable-next-line @typescript-eslint/no-unused-vars
//           const result = await client.graphql({
//             query,
//             variables: {
//               input: {
//                 page: currentPage,
//                 rowsPerPage: currentRowsPerPage,
//                 filterExpression,
//                 expressionAttributeValues,
//               }
//             },
//             authMode: 'userPool'
//           });

//           const isDataTableQuery = graphqlFunction.includes("DataTable")

//           const tmpData = isDataTableQuery ?
//             // eslint-disable-next-line no-eval
//             JSON.parse(eval("result.data." + graphqlFunction + ".body")) :
//             // eslint-disable-next-line no-eval
//             eval("result.data." + graphqlFunction)

//           setPaginationServer(isDataTableQuery)
//           setPaginationTotalRows(isDataTableQuery ? tmpData.totalRows : 0)

//           if (codeTableMapping != null) {
//             for (const mapping of codeTableMapping) {
//               const codeTableId = await getCodeTableId(mapping.codeTable)
//               if (codeTableId) {
//                 const map: { [x: string]: any }[] = await getCodeDetailOptions(codeTableId)
//                 for (let obj of tmpData.items) {
//                   if (obj.hasOwnProperty(mapping.column)) {
//                     const currentValue = obj[mapping.column]
//                     const mapItem: { [x: string]: any } = map.filter(obj => obj.hasOwnProperty("id") && obj["id"] === currentValue)
//                     if (mapItem.length > 0) {
//                       obj[mapping.column] = mapItem[0]["value"]
//                       obj[mapping.column + "Sort"] = mapItem[0]["sortOrder"]
//                     }
//                   }
//                 }
//               }
//             }
//           }

//           if (sortBy != null) {
//             tmpData.items.sort((a:any, b:any) => {

//               for (let key of sortBy) {

//                 if (codeTableMapping) {
//                   const map = codeTableMapping.filter(obj => obj["column"] === key)
//                   if (map.length > 0) {
//                     key = key + "Sort"
//                   }
//                 }

//                 const aValue = a[key]
//                 const bValue = b[key]

//                 if (aValue < bValue) return -1
//                 if (aValue > bValue) return 1
//               }
//               return 0
//             })
//           }

//           setData(tmpData.items)
//         } catch (error: any) {
//           console.log(error.errors[0].message)
//         }
//         setPending(false)
//       }
//     }
//     fetchData();
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [currentPage, currentRowsPerPage])

//   const paginationComponentOptions = {
//     rowsPerPageText: '페이지당 조회 갯수',
//     rangeSeparatorText: '중',
//     selectAllRowsItem: true,
//     selectAllRowsItemText: '전체',
//   }

//   return (
//     <ArticleCard>
//       <div className='page-body__card_title'>{title}</div>
//       <div className="page-body__card_datatable">
//         <DataTable
//           columns={columns}
//           data={data}
//           noDataComponent={<NoData />}
//           persistTableHead={true}
//           noContextMenu={true}
//           selectableRows={true}
//           selectableRowsHighlight={true}
//           selectableRowsComponent={Checkbox as unknown as ReactNode}
//           selectableRowsSingle={selectableRowsSingle}
//           onSelectedRowsChange={handleSelectedRowChange}
//           pagination
//           paginationServer={paginationServer}
//           onChangeRowsPerPage={setCurrentRowsPerPage}
//           onChangePage={handlePageChange}
//           paginationTotalRows={paginationTotalRows}
//           paginationComponentOptions={paginationComponentOptions}
//           progressPending={pending}
//           progressComponent={
//             <ReactLoading type="bubbles" color="#888888" />
//           }
//         />
//       </div>
//       <DataTableButtons
//         buttons={buttons}
//         valuesOnSelectedRow={rowValue}
//         editButtonDisabled={editButtonDisabled}
//       />
//     </ArticleCard>
//   )
// }

// export default DataTableComponent

// // Reference : 
// // - https://react-data-table-component.netlify.app/
