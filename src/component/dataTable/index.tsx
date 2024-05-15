import { useState, useEffect, ReactNode } from 'react'
import DataTable from 'react-data-table-component'
import Checkbox from "@mui/material/Checkbox"
import ReactLoading from 'react-loading'
import { generateClient } from '@aws-amplify/api';
import ArticleCard from 'component/article/card'
import DataTableButtons from '../dataTable/dataTableButtons'
import 'configureAmplify'

export interface IDataTableProps {
  title: string
  columns: any[]
  graphqlOption: {
    query: any,
    options?: any,
    name: string}
  buttons: any
  sortBy?: string[]
  selectableRowsSingle: boolean
}

const DataTableComponent = (props: IDataTableProps) => {
  const { title, columns, graphqlOption, buttons, sortBy, selectableRowsSingle } = props
  const [data, setData] = useState<any[]>([])
  const [pending, setPending] = useState(true)
  const [editButtonDisabled, setEditButtonDisabled] = useState(true);
  const [rowValue, setRowValue] = useState<{} | [{}]>({});

  const NoData = () => {
    return (
      <div className='page-body__card_datatable_noData'>
        조회 할 데이터 없습니다.
      </div>
    );
  }

  const handleSelectedRowChange = (selected: {allSelected: boolean, selectedCount: number, selectedRows: number[]}) => {
    setEditButtonDisabled(selected.selectedCount === 0)
    const rowValue = 
      selected.selectedCount === 0 ? {} :
      selected.selectedCount === 1 ? selected.selectedRows[0] : 
      selected.selectedRows
    setRowValue(rowValue)
  }

  const paginationComponentOptions = {
    rowsPerPageText: '페이지당 조회 갯수',
    rangeSeparatorText: '중',
    selectAllRowsItem: true,
    selectAllRowsItemText: '전체',
  }

  useEffect(() => {
    const sortData = (items: [{}]) => {
      if (sortBy) {
        items.sort((a:any, b:any) => {
          let aValue = a
          let bValue = b
          for (const keyString of sortBy) {
            const keys = keyString.split(".")
            for (const key of keys) {
              aValue = aValue[key]
              bValue = bValue[key]
            }
            if (aValue < bValue) return -1
            if (aValue > bValue) return 1

            aValue = a
            bValue = b
          }
          return 0
        })
      }
      return items
    }

    const fetchData = async() => {
      console.log(["Fetch request", graphqlOption.query, graphqlOption.options])
      const client = generateClient();
      try {
        let nextToken = null;
        let data: any = [];
        do {
          let query: any = nextToken ? 
            {query: graphqlOption.query, variables: {...graphqlOption.options, nextToken: nextToken}} : 
            {query: graphqlOption.query, variables: graphqlOption.options}
          //console.log(query)
          const result = await client.graphql(query)
          //console.log(result)
          
          if ('data' in result) {
            nextToken = result.data[graphqlOption.name].nextToken
            let items = result.data[graphqlOption.name].items
            data = [...data, ...items]
          }
        } while (nextToken)
        data = sortData(data)
        //console.log(data)
        setData(data)
      } catch (error: any) {
        console.log(error)
      }
      setPending(false)
    }

    fetchData();
  }, [graphqlOption, sortBy])

  return (
    <ArticleCard>
      <div className='page-body__card_title'>{title}</div>
      <div className="page-body__card_datatable">
        <DataTable
          columns={columns}
          data={data}
          noDataComponent={<NoData />}
          persistTableHead={true}
          noContextMenu={true}
          selectableRows={true}
          selectableRowsHighlight={true}
          selectableRowsComponent={Checkbox as unknown as ReactNode}
          selectableRowsSingle={selectableRowsSingle}
          onSelectedRowsChange={handleSelectedRowChange}
          pagination
          paginationComponentOptions={paginationComponentOptions}
          progressPending={pending}
          progressComponent={
            <ReactLoading type="bubbles" color="#888888" />
          }
        />
      </div>
      <DataTableButtons
        buttons={buttons}
        valuesOnSelectedRow={rowValue}
        editButtonDisabled={editButtonDisabled}
      />
    </ArticleCard>
  )
}

export default DataTableComponent