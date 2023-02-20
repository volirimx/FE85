import React, { useState } from "react";
import styles from "./FormRegistration.module.css";


const FormRegistration = () => {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")

    const submitValue = () => {
        const value = {
            "login": login,
            "password": password,
            "repeatPassword": repeatPassword
        }
        if (password !== repeatPassword) {
            alert("Try again!")
        }
        console.log(value)
    }

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <p className={styles.text}>Email</p>
                <input className={styles.input} value={login} type="email" placeholder="Enter email" 
                    onChange={(e => setLogin(e.target.value))}/>
                <p className={styles.text}>Password</p>
                <input className={styles.input} value={password} type="password" placeholder="Enter password" 
                    onChange={(e => setPassword(e.target.value))}/>
                <p className={styles.text}>Repeat password</p>
                <input className={styles.input} value={repeatPassword} type="password" placeholder="Repeat password" 
                    onChange={(e => setRepeatPassword(e.target.value))}/>
                <button onClick={submitValue} className={styles.buttonRegister}><a className={styles.link} href="/success">Register</a></button>
            </form>
        </div>
    )
}


export default FormRegistration;