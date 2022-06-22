import React, {useState} from 'react';
import {Cards} from "./Cards/Cards";
import s from './Goods.module.css'
import {Preloader} from "../../common/Preloader";
import SuperSelect from "../../common/Select/SuperSelect";

export type GoodType = {
  id: number, name: string, filter: string, src: string
}
const defaultGoods: Array<GoodType> = [
  {id: 1, name: 'SOFA', src:"https://supersnimki.ru/images/pub/2017/11/20/343708e7-ce20-11e7-9923-90b50f07f13d_original.jpg?556747", filter: 'Design'},
  {id: 2, name: 'KeyBoard',src:"https://avatars.mds.yandex.net/get-zen_doc/1587994/pub_5d7df76035c8d800ad8f0e69_5d82362a8f011100b7d48b09/scale_1200", filter: 'Branding'},
  {id: 3, name: 'Work Media',src:"https://photocentra.ru/images/main89/895379_main.jpg", filter: 'Illustration'},
  {id: 4, name: 'DDDone',src:"https://travel-dom.ru/wp-content/uploads/2019/08/sibir1.jpg", filter: 'Motion'},
  {id: 5, name: 'Abstract', src:"https://webkamerton.ru/sites/default/files/wp-content/thumbnails/skrinshot-13-09-2021-103546.jpg",filter: 'Design'},
  {id: 6, name: 'HandP', src:"https://photocentra.ru/blog/1069/1.jpg", filter: 'Branding'},
  {id: 7, name: 'Architect', src:"https://gamerwall.pro/uploads/posts/2022-06/1655812215_53-gamerwall-pro-p-sibir-vesnoi-oboi-63.jpg",filter: 'Illustration'},
  {id: 8, name: 'CalC', src:"https://proprikol.ru/wp-content/uploads/2020/07/kartinki-zimnij-vecher-55.jpg",filter: 'Motion'},
  {id: 9, name: 'Sport', src:"https://avatars.mds.yandex.net/get-zen_doc/1328466/pub_60fbb08b51197c3f21ea9a6a_60fbb08d237ef804672941ef/scale_1200",filter: 'Design'},
  {id: 10, name: 'River', src:"https://posibiri.ru/wp-content/uploads/2020/04/030420.jpg",filter: 'Branding'},
  {id: 11, name: 'Lake', src:"https://gamerwall.pro/uploads/posts/2022-06/1655685008_26-gamerwall-pro-p-sibir-ozero-baikal-priroda-krasivo-foto-26.jpg",filter: 'Illustration'},
  {id: 12, name: 'Forest', src:"https://gamerwall.pro/uploads/posts/2022-06/1655684985_50-gamerwall-pro-p-sibir-ozero-baikal-priroda-krasivo-foto-55.jpg",filter: 'Motion'},
  {id: 13, name: 'Sea', src:"https://gamerwall.pro/uploads/posts/2022-06/1655685006_41-gamerwall-pro-p-sibir-ozero-baikal-priroda-krasivo-foto-42.jpg",filter: 'Design'},
  {id: 14, name: 'mountain', src:"https://travelpoisk.ru/data/wikitravel/22/sibir.jpg",filter: 'Branding'},
  {id: 15, name: 'village', src:"https://photocentra.ru/images/main71/715466_main.jpg",filter: 'Illustration'},
  {id: 16, name: 'snow', src:"https://proprikol.ru/wp-content/uploads/2020/07/kartinki-zimnij-vecher-44.jpg",filter: 'Motion'},
  {id: 17, name: 'Night', src:"https://avatars.mds.yandex.net/get-zen_doc/30884/pub_5c380ac35c17e000a9861d68_5c382f17561f7a00aa62eef2/scale_1200",filter: 'Design'},
  {id: 18, name: 'Phone', src:"https://proprikol.ru/wp-content/uploads/2020/07/kartinki-zimnij-vecher-58.jpg",filter: 'Motion'},
  {id: 19, name: 'Car', src:"https://proprikol.ru/wp-content/uploads/2020/07/kartinki-zimnij-vecher-58.jpg",filter: 'Illustration'},
  {id: 20, name: 'Computer', src:"https://proprikol.ru/wp-content/uploads/2020/07/kartinki-zimnij-vecher-58.jpg",filter: 'Branding'},
  {id: 21, name: 'Disk', src:"https://proprikol.ru/wp-content/uploads/2020/07/kartinki-zimnij-vecher-58.jpg",filter: 'Design'},
  {id: 22, name: 'Browser', src:"https://proprikol.ru/wp-content/uploads/2020/07/kartinki-zimnij-vecher-58.jpg",filter: 'Design'},
  {id: 23, name: 'Google', src:"https://proprikol.ru/wp-content/uploads/2020/07/kartinki-zimnij-vecher-58.jpg",filter: 'Motion'},
  {id: 24, name: 'Yandex', src:"https://proprikol.ru/wp-content/uploads/2020/07/kartinki-zimnij-vecher-58.jpg",filter: 'Illustration'},
  {id: 25, name: 'Cd', src:"https://proprikol.ru/wp-content/uploads/2020/07/kartinki-zimnij-vecher-58.jpg",filter: 'Motion'},
  {id: 26, name: 'Floor', src:"https://proprikol.ru/wp-content/uploads/2020/07/kartinki-zimnij-vecher-58.jpg",filter: 'Illustration'},
  {id: 27, name: 'House', src:"https://proprikol.ru/wp-content/uploads/2020/07/kartinki-zimnij-vecher-58.jpg",filter: 'Motion'},
]
const filterValue: Array<string> = ['Show All', 'Design', 'Branding', 'Illustration', 'Motion']
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
  const[loading, setLoading] = useState<boolean>(false)

  const onClickHandler = (value: string) => {
    setFilter(value)
  }
  let filteredGoods = filterGoods(goods, filter)
  filteredGoods = filteredGoods.slice(0, numberOfItems)
  const onClickAddItem = () => {
    setLoading(true)
    setTimeout(() => {
      setNumberOfItems(numberOfItems += 9)
      setLoading(false)
    }, 1000)

  }
 const deleteGood = (cardId: number) => {
   setGoods(goods.filter((g) => g.id !== cardId))
  }
  const onChangeCallback = (value: string) => {
    setFilter(value)
  }
  console.log(filter)
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
        <SuperSelect options={filterValue} onChangeOption={onChangeCallback}/>
        <Cards deleteGood={(cardId) => {deleteGood(cardId)}} onClickFilterGoods={onClickHandler} data={filteredGoods}/>
        <div className={s.btnWrapper}>
          {loading
            ? (
             <Preloader/>
            ) : (
              <div>
                <button onClick={onClickAddItem} className={s.btnLoad}>Load More</button>
              </div>
            )
          }
        </div>

      </div>
    </div>
  );
};

