import React, {useState} from "react";
import styles from "./Header.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { log } from "console";


interface IHeader {
    firstName: string;
    lastName: string;
}


const Header = ({firstName, lastName}: IHeader) => {

    return (
        <div>
            <div className={styles.menu}>
                <div>
                    <BurgerMenu/>
                </div>
                <div className={styles.button}>
                    <div className={styles.user}>{firstName}{lastName}</div>
                </div>
            </div>
        </div>
    )
}


export default Header;