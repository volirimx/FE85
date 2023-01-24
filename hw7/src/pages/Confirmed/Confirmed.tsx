import React from "react";
import styles from './Confirmed.module.css'
import {pageHOC} from "../../HOCs/pageHOC";

const Confirmed = () => {
    return (
        <div className={styles.confirmed}>
            <div className={styles.text}>Email confirmed. <span>You tozhe choto tam.</span></div>
            <button className={styles.button}>Go to home</button>
        </div>
    )
}

export default pageHOC(Confirmed);