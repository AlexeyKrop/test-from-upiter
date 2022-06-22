import React, {useState} from 'react';
import {Cards} from "./Cards/Cards";
import s from './Goods.module.css'

export type GoodType = {
  id: number, name: string, filter: string
}
const defaultGoods: Array<GoodType> = [
  {id: 1, name: 'SOFA', filter: 'Design'},
  {id: 2, name: 'KeyBoard', filter: 'Branding'},
  {id: 3, name: 'Work Media', filter: 'Illustration'},
  {id: 4, name: 'DDDone', filter: 'Motion'},
  {id: 5, name: 'Abstract', filter: 'Design'},
  {id: 6, name: 'HandP', filter: 'Branding'},
  {id: 7, name: 'Architect', filter: 'Illustration'},
  {id: 8, name: 'CalC', filter: 'Motion'},
  {id: 9, name: 'Sport', filter: 'Design'},
  {id: 10, name: 'html & css', filter: 'Branding'},
  {id: 11, name: 'html & css', filter: 'Illustration'},
  {id: 12, name: 'html & css', filter: 'Motion'},
  {id: 13, name: 'html & css', filter: 'Design'},
  {id: 14, name: 'html & css', filter: 'Branding'},
  {id: 15, name: 'html & css', filter: 'Illustration'},
  {id: 16, name: 'html & css', filter: 'Motion'},
  {id: 17, name: 'html & css', filter: 'Design'},
  {id: 18, name: 'html & css', filter: 'Motion'},
]

export const filterGoods = (goods: Array<GoodType>, filter: string): Array<GoodType> => {
  if (filter === 'all') {
    return goods
  }
  if (filter === 'Design') {
    return goods.filter((el) => el.filter === 'Design')
  }
  if (filter === 'Branding') {
    return goods.filter((el) => el.filter === 'Branding')
  }
  if (filter === 'Illustration') {
    return goods.filter((el) => el.filter === 'Illustration')
  }
  if (filter === 'Motion') {
    return goods.filter((el) => el.filter === 'Motion')
  }
  return goods
}
export const Goods = () => {
  const [goods, setGoods] = useState<Array<GoodType>>(defaultGoods)
  const [filter, setFilter] = useState<string>('Show All')
  let [numberOfItems, setNumberOfItems] = useState<number>(9)

  const onClickHandler = (value: string) => {
    setFilter(value)
  }
  let filteredGoods = filterGoods(goods, filter)
  filteredGoods = filteredGoods.slice(0, numberOfItems)
  const onClickAddItem = () => {
    setNumberOfItems(numberOfItems += 9)
  }
 const deleteGood = (cardId: number) => {
   setGoods(goods.filter((g) => g.id !== cardId))
  }
  return (
    <div className='container'>
      <div className={s.wrapper}>
        <div className={s.buttonGroup}>
          <button  className={filter === 'Show All' ? `${s.btnActive}` : `${s.btn}`} onClick={() => {onClickHandler('Show All')}} >Show All</button>
          <button className={filter === 'Design' ? `${s.btnActive}` : `${s.btn}`} onClick={() => {onClickHandler('Design')}}>Design</button>
          <button className={filter === 'Branding' ? `${s.btnActive}` : `${s.btn}`} onClick={() => {onClickHandler('Branding')}}>Branding</button>
          <button className={filter === 'Illustration' ? `${s.btnActive}` : `${s.btn}`} onClick={() => {onClickHandler('Illustration')}}>Illustration</button>
          <button className={filter === 'Motion' ? `${s.btnActive}` : `${s.btn}`} onClick={() => {onClickHandler('Motion')}}>Motion</button>
        </div>
        <Cards deleteGood={(cardId) => {deleteGood(cardId)}} onClickFilterGoods={onClickHandler} data={filteredGoods}/>
        <div className={s.btnWrapper}>
          <button onClick={onClickAddItem} className={s.btnLoad}>Load More</button>
        </div>

      </div>
    </div>
  );
};

