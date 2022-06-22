import React, {useState} from 'react';
import s from './Card.module.css'

export const Card = (props: any) => {
  const[toggle, setToggle] = useState<boolean>(false)
  console.log(toggle)
  const onClickHandler = (value: string) => {
    props.onClickFilterGoods(value)
  }
  const onClickCardActiveHandler = () => {
    setToggle(!toggle)
  }
  return (
    <div className={!toggle ? `${s.wrapper}` : `${s.wrapper} ${s.cardActive}`} onClick={onClickCardActiveHandler}>
      <div className={s.filterGroup}>
        <button className={s.btn} onClick={()=>onClickHandler(props.filter)} name={props.filter}>{props.filter}</button>
        <p className={s.name}>{props.name}</p>
      </div>

    </div>
  );
};
