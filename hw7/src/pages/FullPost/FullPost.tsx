import React from "react";
import styles from "./FullPost.module.css";
import Title from "../../components/Title/Title";
import ButtonLike from "../../components/ButtonLike/ButtonLike";
import ButtonSwitch from "../../components/ButtonSwitch/ButtonSwitch";

interface IFullPosts {
    title: string;
    image: string;
    description: string;
    date: string;
}

const FullPost = ({image, description, date, title}:IFullPosts) => {
    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <p className={styles.date}>date | {date}</p>
                <Title
                    title={title}
                />
                <div className={styles.image}>
                    <img src={image}></img>
                    <div className={styles.text}>{description}</div>
                </div>
                <div>
                    <ButtonLike/>
                </div>
                <div>
                    <ButtonSwitch/>
                </div>
            </div>
        </div>
    )
}

export default FullPost;