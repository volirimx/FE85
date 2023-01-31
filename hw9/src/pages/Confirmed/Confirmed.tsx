import React from "react";
import styles from './Confirmed.module.css'
import Title from "../../components/Title/Title";
import {useThemeContext} from "../../context/themeContext";

const Confirmed = () => {

    const { theme, changeTheme } = useThemeContext();

    return (<>
            <Title title={'Success'}/>
            <div className={theme === 'light' ? styles.confirmed : `${styles.confirmed} ${styles.confirmedDark}`}>
                <div className={styles.text}>Email confirmed. <span>You tozhe choto tam.</span></div>
                <button className={styles.button}>Go to home</button>
            </div>
    </>
    )
}

export default Confirmed;