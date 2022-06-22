import React from 'react';
import {GoodsType} from "../Goods";
import {Card} from "./Card/Card";
import s from './Cards.module.css'
type CardsPropsType = {
  data: Array<GoodsType>
}
export const Cards = (props: CardsPropsType) => {
  const mappedGoods= props.data.map((m: GoodsType) => (
    <Card
      key={m.id}
      affair={m}
      name={m.name}
      filter={m.filter}
    />
  ))
  return (
    <div className={s.wrapper}>
      {mappedGoods}
    </div>
  );
};
