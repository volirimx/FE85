import React, {useState} from 'react';
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
        <Link to='/blog' className={location.pathname === '/blog' ? styles.linkActive : ''} onClick={() => setActive(!isActive)}>Blog</Link>
        <Link to='/registration' className={location.pathname === '/registration' ? styles.linkActive : ''} onClick={()=> setActive(!isActive)}>Registration</Link>
        <Link to='/signIn' className={location.pathname === '/signIn' ? styles.linkActive : ''} onClick={() => setActive(!isActive)}>SignIn</Link>
        <Link to='/success' className={location.pathname === '/success' ? styles.linkActive : ''} onClick={() => setActive(!isActive)}>Success</Link >
        <Link to='/searchPost' className={location.pathname === '/searchPost' ? styles.linkActive : ''} onClick={() => setActive(!isActive)}>SearchPost</Link>
        <Link to='/savedPosts' className={location.pathname === '/savedPosts' ? styles.linkActive : ''} onClick={() => setActive(!isActive)}>SavedPosts</Link>
        <Link to='/activate/NTg0Mw/bjocj9-9ab8ea6a8d6d4b392321c2c7b7a05d1a' className={location.pathname === '/activatedPosts' ? styles.linkActive : ''} onClick={() => setActive(!isActive)}>ActivatedPosts</Link>
      </nav>
    </div>
  );
};

export default Burger;
