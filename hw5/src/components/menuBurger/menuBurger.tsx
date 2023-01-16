import React, { useState } from 'react';
import styles from "./menuBurger.module.css"

interface IMenuBurger {
firstName: string;
lastName: string;
}

const MenuBurger = ({firstName, lastName}: IMenuBurger) => {
    const [menu, setMenu] = useState(false);
    return (
        <div>
            <div onClick={() => setMenu(!menu)} className={styles.menu__burger}>
                <div className={menu ? styles.baractive1 : styles.bar1}></div>
                <div className={menu ? styles.baractive2 : styles.bar2}></div>
                <div className={menu ? styles.baractive3 : styles.bar3}></div>
            </div>
            <div className={menu ? styles.menuactive : styles.menu__section}>
                <div className={styles.part}>{firstName.slice(0, 1).toUpperCase()}
                {lastName.slice(0, 1).toUpperCase()}{' '}
                {firstName}{' '}{lastName}</div>
            </div>
        </div>
    );
}

export default MenuBurger;