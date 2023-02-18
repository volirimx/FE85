import React, {useState} from "react";
import styles from "./BurgerMenu.module.css";
import { Link } from "react-router-dom";


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
            <div className={styles.part}>
                <Link className={styles.menuSection} to="/posts">All Posts</Link>
                <Link className={styles.menuSection} to="/">Login</Link>
                <Link className={styles.menuSection} to="/registration">Registration</Link>
                <Link className={styles.menuSection} to="/search">Search</Link>
            </div>
        </div>
    </div>
    )
};

export default BurgerMenu;
