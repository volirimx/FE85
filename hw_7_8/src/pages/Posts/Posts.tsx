import React, { useEffect, useState } from "react";
import { CardTablet } from "../../components/CardTablet/CardTablet";
import Tab from "../../components/Tab/Tab";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAllPosts } from "../../redux/slices/cardSlice";
import PageTemplate from "../PageTemplate/PageTemplate";
import styles from "./Posts.module.css"


export const Posts = () => {
const [tab, setTab] = useState(0)

const tabs = [
  {
    id: 0,
    title: 'All',
    IsDisabled: false
  },
  {
    id: 1,
    title: 'My favorites',
    IsDisabled: false
  },
  {
    id: 2,
    title: 'Popular',
    IsDisabled: false
  }
]

const cards = useAppSelector((store) => store.cards.cards)
const dispatch = useAppDispatch()

  useEffect (() =>  {
    dispatch(getAllPosts())
  }, [])

  return (
    <div className={styles.wrapper}>
      <PageTemplate title={"Blog"} linkName={''}>
        <Tab item={tabs} tab={tab} setTab={setTab} />
          <div className={styles.container}>
            {cards.map((card) => ( <CardTablet card={card} key={card.id} /> ))}
          </div>
      </PageTemplate>
    </div>
  );
};
