import React from "react";
import { deflate } from "zlib";
import styles from './SmallestPost.module.css'

interface IPost {
    image: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    description: string;
    author: number;
}





const SmallestPost = ({ image, text, date, lesson_num, title, description, author}: IPost) => {
    return (
        <div className={styles.container}>
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