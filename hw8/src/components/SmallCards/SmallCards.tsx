import React from "react";
import styles from "./SmallCards.module.css";
import { useNavigate } from "react-router-dom";


interface ISmallCard {
    title: string;
    data: string;
    image: string;
    id: number;
}

const SmallCard = ({title, data, image, id}: ISmallCard) => {

    const navigate = useNavigate()

    return (
        <div className={styles.card} onClick={() => navigate(`${id}`)}>
            <div className={styles.content}>
                <div>
                    <div className={styles.date}>{data}</div>
                    <div className={styles.title}>{title}</div>
                </div>
                <div>
                    <img className={styles.image} src={image}></img>
                </div>
            </div>
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
    )
}

export default SmallCard;
