import react from 'react';
import HeaderMenuItem from '../HeaderMenuItem/HeaderMenuItem';
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.container}>
      <HeaderMenuItem icon={require('../../img/icon-burger.png')} />
      <div className={styles.subContainer}>
        <HeaderMenuItem icon={require('../../img/icon-search.png')}/>
        <HeaderMenuItem icon={require('../../img/icon-user.png')} />
      </div>
    </div>
  )
}

export default Header;
