import React from "react";
import styles from "./MediumCards.module.css";
import { useNavigate } from "react-router-dom";

interface IMediumCard {
    title: string;
    data: string;
    image: string;
    id: number;
    key: number;
}

const MediumCard = ({title, data, image, id, key}: IMediumCard) => {

    const navigate = useNavigate()
    return (
        <div>
            <div className={styles.card} onClick={()=> navigate(`${id}`)}>
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

export default MediumCard;