import React from "react";
import styles from './SmallerPost.module.css'
import { useThemeContext } from "../../context/theme";



interface IPost {
    image: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    description: string;
    author: number;
}




const SmallerPost = ({ image, text, date, lesson_num, title, description, author}: IPost) => {
    const theme = useThemeContext()
    return (
        <div className={theme.theme === 'light' ? styles.container : styles.containerDark}>
        <img src={image} alt="" className={styles.image}/>
        <div className={styles.textcontent}>
            <h1>{title}</h1>
            <div>{lesson_num}</div>
            <div>{text}</div>
            <div>{`Author: ${author}`}</div>
            <div>{date}</div>
        </div>
    </div>
    )
}


export default SmallerPost