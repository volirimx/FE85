import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FormRegistration.module.css";


const FormRegistration = () => {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")

    const navigate = useNavigate()

    const submitValue = () => {
        const value = {
            "login": login,
            "password": password,
            "repeatPassword": repeatPassword,
            "navigate": navigate("/success")
        }
        if (password !== repeatPassword) {
            alert("Try again!")
            navigate("/registration")
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
                <button onClick={submitValue} className={styles.buttonRegister}>Register</button>
            </form>
        </div>
    )
}


export default FormRegistration;