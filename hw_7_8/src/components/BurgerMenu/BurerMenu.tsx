import { useLocation, useNavigate } from 'react-router-dom';
import styles from './BurgerMenu.module.css'

interface IBurgerMenu {
  open: boolean;
  setOpen: (arg: boolean) => void;
}


const BurgerMenu = ({open, setOpen}: IBurgerMenu) => {

  const navigate = useNavigate()
  const location = useLocation()

  const handleBurgerMenuClick = () => {
      setOpen(!open)
  }
  return (
      <div className={styles.container} onClick={handleBurgerMenuClick}>
          <div className={open ? styles.menuOpen : styles.menuClosed}></div>
          <ul className={open ? styles.containerOpen : styles.containerClosed}>
              <li className={location.pathname === '/Login' ? styles.active : ''} onClick={() => navigate('/Login')}>Sign In</li>
              <li className={location.pathname === '/Signup' ? styles.active : ''} onClick={() => navigate('/Signup')}>Sign Up</li>
              <li className={location.pathname === '/posts' ? styles.active : ''} onClick={() => navigate('/posts')}>All Posts</li>
              <li className={location.pathname === '/Success' ? styles.active : ''} onClick={() => navigate('/Success')}>Success</li>
              <li className={location.pathname === '/Search' ? styles.active : ''} onClick={() => navigate('/Search')}>Search</li>
          </ul>
      </div>
  
  )
}


export default BurgerMenu