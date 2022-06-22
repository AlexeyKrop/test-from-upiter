import React from 'react';
import {GoodType} from "../Goods";
import {Card} from "./Card/Card";
import s from './Cards.module.css'
type CardsPropsType = {
  data: Array<GoodType>
  onClickFilterGoods: (value: string) => void
  deleteGood: (id: number) => void
}
export const Cards = (props: CardsPropsType) => {
  const mappedGoods= props.data.map((m: GoodType) => (
    <Card
      onClickFilterGoods={props.onClickFilterGoods}
      key={m.id}
      id={m.id}
      tabIndex={m.id}
      good={m}
      name={m.name}
      filter={m.filter}
      deleteGood={props.deleteGood}
    />
  ))
  return (
    <div className={s.wrapper}>
      {mappedGoods}
    </div>
  );
};
