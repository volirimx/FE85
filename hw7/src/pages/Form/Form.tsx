import React from "react";
import {pageHOC} from "../../HOCs/pageHOC";
import styles from './Form.module.css';
import {useState} from "react";

const Form = () => {

    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const handleButtonClick = (e: any) => {
        e.preventDefault();
        alert(`${form.username} ${form.password}`);
        setForm({username: '', password: ''})
    }

    return (
        <form className={styles.form}>
            <input className={styles.input} onChange={(e) => setForm({...form, username: e.target.value})} type="email" value={form.username} placeholder={'Your email'}/>
            <input className={styles.input} type="password" placeholder={'Your password'} onChange={(e) => setForm({...form, password: e.target.value})} value={form.password}/>
            <button type="submit" onClick={(e) => handleButtonClick(e)} className={styles.button}>Sign in</button>
        </form>
    )
}

export default pageHOC(Form);