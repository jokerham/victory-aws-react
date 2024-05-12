import { ReactElement, ReactNode } from 'react'
import { Button } from '@mui/material'
import { BsCheckCircle } from 'react-icons/bs'
import { IoAdd } from 'react-icons/io5'
import { FaUndoAlt } from 'react-icons/fa'
import { FiCopy } from 'react-icons/fi'
import { VscEdit } from 'react-icons/vsc'
import { RiDeleteBinLine } from 'react-icons/ri'

interface IDataTableButton {
  name: String
  icon: ReactNode
  toggleOnSelect: boolean
  editButtonDisabled: boolean
  onClickEventHandler: (value: any | null) => void
  valuesOnSelectedRow: any
  label: String
}

const DataTableButton = (props: IDataTableButton) => {
  const { icon, toggleOnSelect, editButtonDisabled, onClickEventHandler, valuesOnSelectedRow, label } = props
  const disabled = toggleOnSelect && editButtonDisabled

  const onClick= () => {
    onClickEventHandler(valuesOnSelectedRow)
  }

  return (
    <Button
      variant="contained" 
      startIcon={icon}
      disabled={disabled}
      onClick={onClick}>
      {label}
    </Button>
  )
}

export interface IButtonOption {
  label: string,
  name: string,
  icon: ReactNode,
  toggleOnSelect: boolean,
  action: string | ((value: any) => void)
}

interface IDataTableButtons {
  buttons: IButtonOption[]
  valuesOnSelectedRow: any | undefined
  editButtonDisabled: boolean
}

const DataTableButtons = (props: IDataTableButtons) => {
  const { buttons, valuesOnSelectedRow, editButtonDisabled } = props
  const dataTableButtonList: ReactElement[] = []

  const possiblePresetButtons = {
    add: { icon: <IoAdd />, label: '추가', toggleOnSelect: false},
    edit: { icon: <VscEdit />, label: '수정', toggleOnSelect: true},
    copy: { icon: <FiCopy />, label: '복사', toggleOnSelect: true},
    delete: { icon: <RiDeleteBinLine />, label: '삭제', toggleOnSelect: true},
    approve: { icon: <BsCheckCircle />, label: '승인', toggleOnSelect: true},
    cancel: { icon: <FaUndoAlt />, label: '취소', toggleOnSelect: false},
  }

  buttons.forEach(button => {
    const { name, action } = button
    if (possiblePresetButtons.hasOwnProperty(name)) {
      const possiblePresetButton = possiblePresetButtons[name as keyof typeof possiblePresetButtons]
      const { icon, label, toggleOnSelect } = possiblePresetButton
      const onClickEventHandler = typeof action == 'string' ?
        (value: any) => {} : action
      dataTableButtonList.push(
        <DataTableButton
          key={name}
          name={name}
          icon={icon}
          toggleOnSelect={toggleOnSelect}
          editButtonDisabled={editButtonDisabled}
          onClickEventHandler={onClickEventHandler}
          valuesOnSelectedRow={valuesOnSelectedRow}
          label={label} />
      )
    } else {
      const { label, icon, toggleOnSelect = true, action } = button
      const onClickEventHandler = typeof action == 'string' ?
        (value: any) => {} : action
      dataTableButtonList.push(
        <DataTableButton
          key={name}
          name={name}
          icon={icon}
          toggleOnSelect={toggleOnSelect}
          editButtonDisabled={editButtonDisabled}
          onClickEventHandler={onClickEventHandler}
          valuesOnSelectedRow={valuesOnSelectedRow}
          label={label} />
      )
    }
  });

  return (
    <div className="page-body__card_buttons">
      {dataTableButtonList}
    </div>
  )
}

export default DataTableButtons