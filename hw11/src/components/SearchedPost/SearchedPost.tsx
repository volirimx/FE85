import React from 'react';
import styles from './SearchedPost.module.css';
import {NavLink} from "react-router-dom";
import {useThemeContext} from "../../context/themeContext";

interface ISearchedPost {
    image: string;
    date: string;
    description: string;
    id: number;

}

const SearchedPost = ({ image, date, description, id}: ISearchedPost) => {

    const { theme, changeTheme } = useThemeContext();

    const getDate = () => {
        const dateString = new Date(date);
        return dateString.toLocaleString()
    }

    return (
        <NavLink to={`/post/${id}`} className={theme === 'light' ? styles.post : `${styles.post} ${styles.postDark}`}>
            <div className={styles.image}>
                <img src={image} alt=""/>
            </div>
            <div className={styles.text}>
                <div className={styles.date}>{getDate()}</div>
                <div className={styles.description}>{description}</div>
            </div>
        </NavLink>
    )
}
export default SearchedPost;