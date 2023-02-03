import React, {useState} from "react";
import styles from "./BurgerMenu.module.css";


const BurgerMenu = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div>
        <div onClick={() => setMenu(!menu)}>
            <div className={menu ? styles.baractive1 : styles.bar1}></div>
            <div className={menu ? styles.baractive2 : styles.bar2}></div>
            <div className={menu ? styles.baractive3 : styles.bar3}></div>
        </div>
        <div className={menu ? styles.menuactive : styles.menu__section}>
            <div className={styles.part}></div>
        </div>
    </div>
    )
};

export default BurgerMenu;
