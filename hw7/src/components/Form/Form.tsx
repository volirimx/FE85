import React from "react";
import styles from "./Form.module.css";


const Form = () => {
    
    function getInput(event: any) {
        console.log(event.target.value);
    }

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <p className={styles.text}>Email</p>
                <input onInput={getInput} className={styles.input} type="email" placeholder="Your email"/>
                <p className={styles.text}>Password</p>
                <input onInput={getInput} className={styles.input} type="password" placeholder="Your password"/>
                <button className={styles.buttonForgot}>Forgot password</button>
                <button className={styles.buttonSign}>Sign In</button>
            </form>
            <div className={styles.registration}>
                <p>Don't have an account?</p>
                <button className={styles.buttonSmallSign}>Sign In</button>
            </div>
        </div>
    )
}

export default Form;