import react from 'react';
import HeaderMenuItem from '../HeaderMenuItem/HeaderMenuItem';
import Burger from '../Burger/Burger'
import { useThemeContext } from '../../context/theme'
import styles from './Header.module.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { increment, decrement } from '../../redux/slices/counterSlice'
import {store} from '../../redux/store'
import { change } from '../../redux/slices/themeSlice';


const Header = () => {
  const dispatch = useAppDispatch()
  const theme = useThemeContext()
  const navigate = useNavigate()
  const handlebuttonClick = () => {
    dispatch(change())
  }
  return (
    <div className={styles.container}>
      <Burger/>
      <button className={styles.button} type='button' onClick={theme.changeThemeFunc}>Change theme context</button>
      <button type='button' onClick={handlebuttonClick}>Change theme </button>
      <div className={styles.subContainer}>
        <HeaderMenuItem icon={require('../../img/icon-search.png')} onClick={() => { navigate('/SearchPost') }} />
        <HeaderMenuItem icon={require('../../img/icon-user.png')} />
      </div>
    </div>
  )
}

export default Header;
