import React from 'react';
import styles from './HeaderMenuItem.module.scss'



interface IHeaderMenuItem {
  icon: string;
  onClick?: () => void;
}


const HeaderMenuItem = ({icon, onClick}: IHeaderMenuItem) => {
  return (
    <div className={styles.container}>
      <img src={icon} alt='Картинка' onClick={onClick}/>
    </div>
  )
}

export default HeaderMenuItem
