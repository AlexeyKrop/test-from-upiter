import React from 'react';
import s from './Card.module.css'
export const Card = (props: any) => {
  const onClickHandler = (value: string) => {
    console.log(value)
  }
  return (
    <div className={s.wrapper}>
      <div className={s.filterGroup}>
        <button className={s.btn} onClick={()=>onClickHandler(props.filter)} name={props.filter}>{props.filter}</button>
        <p className={s.name}>{props.name}</p>
      </div>

    </div>
  );
};
