import { ChangeEvent, ComponentType, useState } from "react"
import { FormikValues, FormikProps } from "formik"
import { useFormikContext } from "./formContext"
import React from "react"
import { SelectorProps } from "component/selector"

export type TFormField = {
  id: string,
  fieldType: string,
  label?: string,
  readOnly?: boolean,
  classNames?: [string],
  options?: [{id: string, value: string} | string]
  accept?: string
  popup?: React.ComponentType<SelectorProps>
  onChange?: (values: FormikValues) => {}
}

export interface IFormFieldProps {
  config: {
    field: TFormField
  }
}

export default function FormField(props: IFormFieldProps) {
  const formik = useFormikContext() as FormikProps<any>
  const [fieldCodeElementId, setFieldCodeElementId] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const values = formik.values
  const handleChange = formik.handleChange

  const field = props.config.field
  const fieldTypeTextType = ['number','contact','popup','readonly']
  const fieldType = fieldTypeTextType.includes(field.fieldType) ? "text" : field.fieldType
  const readOnly = field.fieldType === "popup" || (field.readOnly === undefined ? false : field.readOnly)

  const getValueByPath = (obj: any, path: string): any => {
    const keys = path.split('.'); // Splitting path into keys
    let value: any = obj;
    for (const key of keys) {
      if (!value || typeof value !== 'object') return undefined; // Handle non-existent paths
      value = value[key];
    }
    return value;
  };

  let value = 
    ( values !== undefined && 
      values !== null ) ? 
      getValueByPath(values, field.id) : 
      (field.fieldType === 'number') ? 0 : '';
  
  const onChangeHandler = (e: ChangeEvent) => {
    handleChange(e)
    setFieldForOnChangeHandler(e)
  }

  const setFieldForOnChangeHandler = (e: ChangeEvent) => {
    console.log("NOT IMPLEMENTED YET")
    // if (props.config.field.onChange != null && e.target !== null) {
    //   let values = formik.values as FormikValues
    //   let target = e.target as HTMLInputElement
    //   values[target.id] = target.value;
    //   let changedValues = props.config.field.onChange(values);
    //   for (const key in values) {
    //     const value = values[key];
    //     if (value.value !== formik.values[value.id]) {
    //       formik.setFieldValue(value.id, value.value);
    //     }
    //   }
    // }
  }

  const closeHandler = () => {
    setIsModalOpen(false)
    return true
  }

  const popupHandler = (fieldId: string) => {
    setFieldCodeElementId(fieldId)
    setIsModalOpen(true)
    return undefined
  }

  const selectHandler: (code: string, value: string) => {} = (code, value) => {
    if (fieldCodeElementId !== "") formik.setFieldValue(fieldCodeElementId, code)
    formik.setFieldValue(fieldProps.id, value)
    setIsModalOpen(false)
    return {};
  }

  const labelElem = (
    <label htmlFor={field.id}>{field.label}</label>
  )

  const selectElem = (
    <select
      id={field.id}
      name={field.id}
      value={value}
      onChange={onChangeHandler}>
      <option key='' value=''></option>
    {
        props.config.field.options?.map(option => (
          (typeof option === "string") ? (
            <option key={option} value={option}>{option}</option>
          ) : (
            <option key={option.id} value={option.id}>{option.value}</option>
          )
        ))
      }
    </select>
  )

  const radioElem = (
    <div className="inputRadio">
      {
        props.config.field.options?.map(option => (
          <div key={typeof option === "string" ? option : option.id}>
            <input 
              type="radio" 
              id={`${field.id}${(typeof option === "string" ? option : option.id)}`}
              name={field.id}
              value={typeof option === "string" ? option : option.id}
              checked={value === (typeof option === "string" ? option : option.id)}
              onChange={onChangeHandler} />
            <span>{typeof option === "string" ? option : option.value ?? ""}</span>
          </div>
        ))
      }
    </div>
  )

  const fieldProps = {
    id: props.config.field.id,
    name: props.config.field.id,
    type: fieldType,
    value: value,
    accept: props.config.field.accept ?? undefined,
    onChange: onChangeHandler
  }

  let optionString = ""
  if (field.options !== undefined && (field.options.length ?? 0) > 0 && typeof field.options[0] === "string") {
    optionString = field.options[0]
  }

  let fieldElem = <input {...fieldProps} />
  if (readOnly) {
    fieldElem = React.cloneElement(fieldElem, { readOnly })
  }
  if (field.fieldType === "popup") {
    const onClickHandler = () => { popupHandler(optionString) }
    fieldElem = React.cloneElement(fieldElem, { onClick: onClickHandler })
  }

  let popupWithProps = <></>

  if (field.fieldType === 'popup' && field.popup !== undefined) {
    const PopupComponent: ComponentType<SelectorProps> = field.popup
    popupWithProps = <PopupComponent onClose={closeHandler} onSelect={selectHandler} />
  }

  if (field.fieldType === 'hidden') {
    return ( fieldElem )
  } else {
    return (
      <div>
        { labelElem }
        { field.fieldType === 'select' ? selectElem : 
          field.fieldType === 'radiobutton' ? radioElem :
          fieldElem }
        {field.fieldType === 'popup' && isModalOpen && popupWithProps}
      </div>
    )
  }
}