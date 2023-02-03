import react from 'react';
import HeaderMenuItem from '../HeaderMenuItem/HeaderMenuItem';
import { useThemeContext } from '../../context/theme'
import styles from './Header.module.scss'

const Header = () => {
  const theme = useThemeContext()
  return (
    <div className={styles.container}>
      <HeaderMenuItem icon={require('../../img/icon-burger.png')} />
      <button className={styles.button} type='button' onClick={theme.changeThemeFunc}>Change theme</button>
      <div className={styles.subContainer}>
        <HeaderMenuItem icon={require('../../img/icon-search.png')}/>
        <HeaderMenuItem icon={require('../../img/icon-user.png')} />
      </div>
    </div>
  )
}

export default Header;
