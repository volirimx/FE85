import React from 'react';
import styles from './Title.module.css';
import {NavLink} from "react-router-dom";
import {useThemeContext} from "../../context/themeContext";

interface ITitleProps {
    title: string
}

const Title = ({ title }: ITitleProps) => {

    const { theme, changeTheme } = useThemeContext();

    return (
        <div className={theme === 'light' ? styles.title : `${styles.title} ${styles.titleDark}`}>
            <NavLink className={styles.button} to={'/posts'}>Вернуться</NavLink>
            <div className={styles.text}>{title}</div>
        </div>
    )
}
export default Title;