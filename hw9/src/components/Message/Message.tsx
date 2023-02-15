import React from "react";
import styles from "./Message.module.css";


interface IMessage {
    text: string;
    message: string;
    button: string;
}

const Message = ({text, message, button}: IMessage) => {
    return (
        <div>
            <div className={styles.container}>
                <p className={styles.text}>{text}</p>
                <p className={styles.text}>{message}</p>
                <button className={styles.button}><a className={styles.link} href="/">{button}</a></button>
            </div>
        </div>
    )
}

export default Message;