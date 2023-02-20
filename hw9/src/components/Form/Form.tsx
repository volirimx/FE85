import { log } from "console";
import React, { useState } from "react";
import styles from "./Form.module.css";


const Form = () => {
    
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const submitValue = () => {
        const value = {
            "login": login,
            "password": password
        }
        console.log(value)
    }

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <p className={styles.text}>Email</p>
                <input className={styles.input} value={login} type="email" placeholder="Your email" onChange={(e => setLogin(e.target.value))}/>
                <p className={styles.text}>Password</p>
                <input className={styles.input} value={password} type="password" placeholder="Your password" onChange={(e => setPassword(e.target.value))}/>
                <button className={styles.buttonForgot}>Forgot password</button>
                <button onClick={submitValue} className={styles.buttonSign}><a href="/posts" className={styles.swich}>Sign In</a></button>
            </form>
            <div className={styles.registration}>
                <p>Don't have an account?</p>
                <p><a href="/registration" className={styles.link}>Sign In</a></p>
            </div>
        </div>
    )
}

export default Form;