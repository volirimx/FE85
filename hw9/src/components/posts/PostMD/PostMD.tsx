import React from "react";
import styles from './PostMD.module.css'
import {IPostProps} from "../../../pages/Posts/Posts";
import {NavLink} from "react-router-dom";
import {useThemeContext} from "../../../context/themeContext";

const PostMD = (props: IPostProps) => {

    const getDate = () => {
        const date = new Date(props.date);
        return date.toLocaleString()
    }

    const { theme, changeTheme } = useThemeContext();

    return (
        <NavLink to={`/post/${props.id}`} className={theme === 'light' ? styles.wrapper : `${styles.wrapper} ${styles.wrapperDark}`}>
            <div className={styles.image}>
                <img src={props.image} alt="#"/>
            </div>
            <div className={styles.description}>
                <div className={styles.date}>{getDate()}</div>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.text}>{props.text}</div>
            </div>
        </NavLink>
    )
}

export default PostMD;