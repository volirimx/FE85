import React from "react";
import styles from './PostLG.module.css'
import {ISavedProps} from "../../../redux/slices/savedSlice";
import {NavLink} from "react-router-dom";

const PostLG = (props: ISavedProps) => {

    return (
        <NavLink to={`/post/${props.id}`} className={styles.wrapper}>
            <div className={styles.text}>
                <div className={styles.text__title}>{props.title}</div>
                <div className={styles.text__subtitle}>{props.description}</div>
            </div>
            <div className={styles.image}>
                <img src={props.image} alt="#"/>
            </div>
        </NavLink>
    )
}

export default PostLG;