import React from "react";
import styles from './Header.module.css';
import burgerIconLight from '../../assets/images/burgerLight.svg';
import burgerIconDark from '../../assets/images/burgerDark.svg';
import userLogoLight from '../../assets/images/userLight.svg'
import userLogoDark from '../../assets/images/userDark.svg'
import closeIcon from '../../assets/images/close.svg'
import searchIconLight from '../../assets/images/searchLight.svg';
import searchIconDark from '../../assets/images/searchDark.svg';
import themeLightIcon from '../../assets/images/themeLight.svg'
import themeDarkIcon from '../../assets/images/themeDark.svg'
import {useState} from "react";
import BurgerModal from "../BurgerModal/BurgerModal";
import {useThemeContext} from "../../context/themeContext";
import {NavLink} from "react-router-dom";

const Header = ({ user }: { user: string }) => {

    const [burger, setBurger] = useState(false);
    const { theme, changeTheme } = useThemeContext();

    return (
        <div className={theme === 'light' ? styles.header : `${styles.header} ${styles.headerDark}`}>
            <button className={`${styles.burgerIcon} ${styles.icon}`} onClick={() => setBurger(!burger)}>
                <img src={burger ? closeIcon : theme === 'light' ? burgerIconLight : burgerIconDark} alt="#"/>
            </button>

            {burger ? <BurgerModal theme={theme} user={user}/> : null}

            <button className={`${styles.themeIcon} ${styles.icon}`} onClick={changeTheme}>
                <img src={theme === 'light' ? themeLightIcon : themeDarkIcon} alt=""/>
            </button>

            <NavLink to={'/search'} className={styles.icon}>
                <img src={theme === 'light' ? searchIconLight : searchIconDark} alt="#"/>
            </NavLink>

            <button className={styles.icon}>
                <img src={theme === 'light' ? userLogoLight : userLogoDark} alt="userLogo"/>
            </button>
        </div>
    )
}

export default Header;