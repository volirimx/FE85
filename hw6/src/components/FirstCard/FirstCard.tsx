import React from "react";
import styles from "./FirstCard.module.css"



interface IFirstCard {
    title: string;
    text: string;
    data: string;
    image: string;
}

const FirstCard = ({title, text, data, image}: IFirstCard) => {
    return (
        <div>
            <div className={styles.card}>
                <div>
                    <div className={styles.date}>{data}</div>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.text}>{text}</div>
                    <div className={styles.buttonlike}>
                        <button className={styles.button}>👍</button>
                        <button className={styles.button}>👎</button>
                    </div>
                </div>
                <div>
                    <img className={styles.image} src={image}></img>
                    <div className={styles.buttonsave}>
                        <button className={styles.button}>☆</button>
                        <button className={styles.button}>...</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstCard;