import React from "react";
import styles from './PostLG.module.css'
import {IPostProps} from "../../../pages/Posts/Posts";

const PostLG = (props: IPostProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <div className={styles.text__date}>{props.date}</div>
                <div className={styles.text__title}>{props.text}</div>
                <div className={styles.text__subtitle}>{props.description}</div>
            </div>
            <div className={styles.image}>
                <img src={props.image} alt="#"/>
            </div>
        </div>
    )
}

export default PostLG;