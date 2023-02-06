import react, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom'
import styles from './Burger.module.scss'

const Burger = () => {
  const [isActive, setActive] = useState(false)
  const location = useLocation()

  return (
    <div className={styles.burger + ' ' + (isActive ? styles.active : '')}>
      <div onClick={() =>setActive(!isActive)} className={styles.burger__icon}>
        <span></span>
      </div>
      <nav className={styles.burger__menu}>
        <Link to='/Blog' className={location.pathname === '/Blog' ? styles.linkActive : ''} onClick={() => setActive(!isActive)}>Blog</Link>
        <Link to='/Registration' className={location.pathname === '/Registration' ? styles.linkActive : ''} onClick={()=> setActive(!isActive)}>Registration</Link>
        <Link to='/SignIn' className={location.pathname === '/SignIn' ? styles.linkActive : ''} onClick={() => setActive(!isActive)}>SignIn</Link>
        <Link to='/Success' className={location.pathname === '/Success' ? styles.linkActive : ''} onClick={() => setActive(!isActive)}>Success</Link >
        <Link to='/SearchPost' className={location.pathname === '/SearchPost' ? styles.linkActive : ''} onClick={() => setActive(!isActive)}>SearchPost</Link>
      </nav>
    </div>
  );
};

export default Burger;
