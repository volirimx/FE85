import React from "react";
import styles from './Login.module.css';
import Title from "../../components/Title/Title";
import {IForm} from "./LoginContainer";

interface ILoginProps {
    handleOnInputChange: (obj: any) => void;
    form: IForm;
    handleButtonSubmit: (e: any) => void;
    theme: string | undefined;
}

const Login = ({ handleOnInputChange, form, handleButtonSubmit, theme }: ILoginProps) => {
    return (
        <>
            <Title title={'Sign in'} />
            <form className={theme === 'light' ? styles.form : `${styles.form} ${styles.formDark}`} onSubmit={(e) => handleButtonSubmit(e)}>
                <input className={styles.input} onChange={(e) => handleOnInputChange({...form, username: e.target.value})} type="text" value={form.username} placeholder={'Your login'} required={true}/>
                <input className={styles.input} type="password" placeholder={'Your password'} onChange={(e) => handleOnInputChange({...form, password: e.target.value})} value={form.password} required={true}/>
                <button type="submit" className={styles.button}>Sign in</button>
            </form>
        </>
    )
}

export default Login;