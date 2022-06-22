import React, {useState} from 'react';
import s from './Card.module.css'
export type CardPropsType = {
  good: {id: number, name: string, filter: string, src: string},
  deleteGood: (id: number) => void,
  filter: string,
  id: number,
  name: string,
  onClickFilterGoods: (value: string) => void,
  tabIndex: number,
}
export const Card = (props: CardPropsType) => {
  const[toggle, setToggle] = useState<boolean>(false)
  const onClickHandler = (value: string) => {
    props.onClickFilterGoods(value)

  }
  const onClickCardActiveHandler = () => {
    setToggle(!toggle)
  }
  const onKeyPressHandler = (id: number) => {
    props.deleteGood(id)
  }
  return (
    <div tabIndex={props.tabIndex} onKeyDown={(e) => {if(e.key === 'Delete') {onKeyPressHandler(props.id)}}} className={!toggle ? `${s.wrapper}` : `${s.wrapper} ${s.cardActive}`} onClick={onClickCardActiveHandler}>
        <img className={s.img} src={props.good.src} alt="cardImage"/>
      <div className={s.filterGroup}>
        <button className={s.btn} onClick={()=>onClickHandler(props.filter)} name={props.filter}>{props.filter}</button>
        <p className={s.name}>{props.name}</p>
      </div>

    </div>
  );
};
