import React from 'react';
import styles from './HeaderMenuItem.module.scss'


interface IHeaderMenuItem {
  icon: string;
}


const HeaderMenuItem = ({icon}: IHeaderMenuItem) => {
  return (
    <div className={styles.container}>
      <img src={icon} alt='Картинка'/>
    </div>
  )
}

export default HeaderMenuItem
