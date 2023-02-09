import React from "react";
import styles from "./ButtonPagination.module.css";


const ButtonPagination = () => {
    return (
        <div className={styles.container}>
            <div>
                <button className={styles.button}>← Previous</button>
                
            </div>
            <div className={styles.containerNumb}>
                <button className={styles.button}>1</button>
                <button className={styles.button}>2</button>
                <button className={styles.button}>3</button>
                <p>...</p>
                <button className={styles.button}>6</button>
            </div>
            <div>
                <button className={styles.button}>Next →</button>
            </div>
        </div>
    )
}

export default ButtonPagination;