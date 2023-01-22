import React from 'react';
import styles from './SecondCard.module.css'

interface ISecondCard {
    title: string;
    data: string;
    image: string;
}

const SecondCard = ({title, data, image}: ISecondCard) => {
    return (
        <div>
            <div className={styles.card}>
                <img className={styles.image} src={image}></img>
                <div className={styles.date}>{data}</div>
                <div className={styles.title}>{title}</div>
                <div className={styles.buttons}>
                    <div className={styles.buttonlike}>
                        <button className={styles.button}>👍</button>
                        <button className={styles.button}>👎</button>
                    </div>
                    <div className={styles.buttonsave}>
                        <button className={styles.button}>☆</button>
                        <button className={styles.button}>...</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondCard;