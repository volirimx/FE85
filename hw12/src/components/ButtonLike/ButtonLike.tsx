import React from "react";
import styles from "./ButtonLike.module.css";

const ButtonLike = () => {
    return (
        <div className={styles.container}>
            <div>
                <button className={styles.buttonLike}>👍</button>
                <button className={styles.buttonLike}>👎</button>
            </div>
            <div>
                <button className={styles.buttonFavorite}>☆ Add to favorite</button>
            </div>
        </div>
    )
}

export default ButtonLike;