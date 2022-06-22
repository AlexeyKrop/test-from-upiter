import React,{KeyboardEvent} from "react";
import {FilterValueType} from "../../components/Main/Goods";
import s from './SuperSelect.module.css'
type OptionsPropsType = {
  filterValue: Array<FilterValueType>
  title: string
  collapsed: boolean
  setCollapsed: (value: boolean) => void
  showFilterValue: (id: number) => void
  onChangeCallback: (value: string) => void
}

export const Options = (props: OptionsPropsType) => {
  console.log(props)
  const onClickMenuListHandler = (id: number, filter: string) => {
    props.showFilterValue(id)
    props.setCollapsed(!props.collapsed)
    props.onChangeCallback(filter)
  }
  const onKeyUp = (e: KeyboardEvent<HTMLUListElement>) => {
    e.currentTarget.focus()
  }
  return (
    <ul className={s.menu} onKeyUp={onKeyUp} tabIndex={0}>
      {props.filterValue.map(u => <li onClick={() => {onClickMenuListHandler(u.id, u.filter)}} key={u.id} className={s.menuList} >{u.filter}</li>)}
    </ul>
  )
}
