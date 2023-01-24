import react from 'react';
import styles from './Burger.module.css'

interface IBurger {
  item: string;
  isActive: boolean;
  setActive: (isActive: boolean) => void;
}

const Burger = ({item, isActive, setActive}: IBurger) => {
  const itemArr = item.split(' ');
  return (
    <div className={styles.burger + ' ' + (isActive ? styles.active : '')}>
      <div onClick={() =>setActive(!isActive)} className={styles.burger__icon}>
        <span></span>
      </div>
      <div className={styles.burger__item}>
        <span>{itemArr[0][0] + itemArr[1][0]}</span>
        {item}
      </div>
    </div>
  );
};

export default Burger;
