import React, { useState } from "react";
import { CardDesctop } from "../../components/CardDesctop/CardDesctope";
import { CardMobile } from "../../components/CardMobile/CardMobile";
import { IData, IDataProps } from "../../components/types";
import PageTemplate from "../PageTemplate/PageTemplate";
import styles from "./Search.module.css"

const Search = ({card}: IDataProps) => {

  const [search, setSearch] = useState('')

  const handleChangeInput = (event: any) => {
    const target = event.target
    setSearch(target.value)
  }

  const searchCard = card.filter(item => {
    return item.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <PageTemplate linkName='Back to home' title='Search'>
      <div className={styles.container}>
        <input className={styles.search} name='search' placeholder='Search...' onChange={handleChangeInput}/>
        {searchCard.map(item => <CardDesctop key={item.id} date={item.date} text={item.text} title={item.title} image={item.image} id={item.id}/>)}
      </div>
    </PageTemplate>
  )
}

export default Search