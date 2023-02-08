import React from "react";
import { deflate } from "zlib";
import styles from './SmallestPost.module.css'
import { useThemeContext } from "../../context/theme";
import { useNavigate } from "react-router-dom";


interface IPost {
    id: number
    image: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    description: string;
    author: number;
}





const SmallestPost = ({ image, text, date, lesson_num, title, description, author, id}: IPost) => {
    const theme = useThemeContext()
    const navigate = useNavigate()
    return (
        <div className={theme.theme === 'light' ? styles.container : styles.containerDark} onClick={() => navigate(`${id}`)}>
            <img src={image} alt="" className={styles.image}/>
            <div className={styles.textcontent}>
                <h1>{title}</h1>
                <div>{`Author: ${author}`}</div>
                <div>{date}</div>
        </div>
    </div>
    )
}



export default SmallestPost