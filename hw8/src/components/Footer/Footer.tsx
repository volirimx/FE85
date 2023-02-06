import React from "react";
import styles from "./Footer.module.css";


const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.footer}>            
                <p className={styles.text}>© 2022 Gandalf</p>
                <p className={styles.text}>All rights reserved</p>
            </div>
        </footer>
    )
};

export default Footer;