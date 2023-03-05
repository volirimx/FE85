import React, {useState, useContext} from "react";
import styles from "./Header.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { ThemeContext } from "../../App";


interface IHeader {
    firstName: string;
    lastName: string;
}


const Header = ({firstName, lastName}: IHeader) => {

    const context = useContext(ThemeContext)

    return (
        <div>
            <div className={styles.menu}>
                <div>
                    <BurgerMenu/>
                </div>
                <button onClick={context.changeThemeFunc}>Change theme</button>
                <div className={styles.button}>
                    <div className={styles.user}>{firstName}{lastName}</div>
                </div>
            </div>
        </div>
    )
}


export default Header;