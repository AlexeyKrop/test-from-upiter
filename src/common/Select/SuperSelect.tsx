import React, {useState} from 'react'
import {Options} from "./Options";
import s from './SuperSelect.module.css'
import {FilterValueType} from "../../components/Main/Goods";
type SuperSelectPropsType = {
  filterValue: Array<FilterValueType>
  onChangeCallback: (value: string) => void
}
export const SuperSelect = (props: SuperSelectPropsType) => {
  const [collapsed, setCollapsed] = useState<boolean>(true)
  const [titleValue, setTitleValue] = useState('Show all')
  const showFilterValue = (id: number) => {
    props.filterValue.map(u => u.id === id ? setTitleValue(u.filter) : '')
  }
  return (
    <>
      <div onClick={() => {setCollapsed(!collapsed)
      }} className={s.menuHeader}>
        <span className={s.menuTitle} >{titleValue}</span>
        <svg className={s.menuIcon} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20" fill="#EF6D58">
          <path
            d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
        </svg>
        {!collapsed && <Options onChangeCallback={props.onChangeCallback} title={titleValue} filterValue={props.filterValue} setCollapsed={setCollapsed}  showFilterValue={showFilterValue} collapsed={collapsed}  />}
      </div>

    </>
  )
}