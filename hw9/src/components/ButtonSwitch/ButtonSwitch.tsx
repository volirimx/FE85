import React from "react";
import styles from "./ButtonSwitch.module.css";


const ButtonSwitch = () => {
    return (
        <div className={styles.container}>
            <div>
                <p className={styles.text}>Previous</p>
                <button className={styles.button}>←</button>
            </div>
            <div>
                <p className={styles.text}>Next</p>
                <button className={styles.button}>→</button>
            </div>
        </div>
    )
}

export default ButtonSwitch;