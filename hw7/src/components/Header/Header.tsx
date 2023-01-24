import React from "react";
import styles from './Header.module.css';
import burgerIcon from '../../assets/images/burger.svg';
import closeIcon from '../../assets/images/close.svg'
import searchIcon from '../../assets/images/search.svg';
import {useState} from "react";

const Header = ({ user }: { user: string }) => {

    const [burger, setBurger] = useState(false);

    const getUserLOGO = (user: string): string => {
        const userArr = user.split(' ');
        return userArr[0][0] + userArr[1][0];
    }

    return (
        <div className={styles.header}>
            <button className={`${styles.burgerIcon} ${styles.icon}`} onClick={() => setBurger(!burger)}>
                <img src={burger ? closeIcon : burgerIcon} alt="#"/>
            </button>

            {burger ?
                <div className={styles.burgerModal}>
                    <div className={styles.userLogo}>{getUserLOGO(user)}</div>
                    <div className={styles.username}>{user}</div>
                </div>
                : null}

            <button className={`${styles.searchIcon} ${styles.icon}`}>
                <img src={searchIcon} alt="#"/>
            </button>
            <button className={`${styles.userIcon} ${styles.icon}`}>{getUserLOGO(user)}</button>
        </div>
    )
}

export default Header;