import React from 'react';
import styles from "./Tab.module.css"


interface IItem {
  id: number;
  title: string;
  IsDisabled: boolean;
}

interface ITab {
  item: IItem[];
  tab: number;
  setTab: (arg: number) => void
}

const Tab = ({ item, tab, setTab }: ITab ) => {
  return (
    <div>
      <div className={styles.container}>
        {item.map((el) => <div key={el.id} className={tab === el.id ? styles.active : ''} onClick={() => setTab(el.id)}>{el.title}</div>)}
      </div>
    </div>
  )
}

export default Tab