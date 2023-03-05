import React from "react";
import styles from "./Title.module.css";


interface ITitle {
    title: string;
}

const Title = ({title}: ITitle) => {
    return (
        <div>
            <h1 className={styles.title}>{title}</h1>
        </div>
    )
}

export default Title;