import React from 'react';
import styles from './Registration.module.css';
import Title from "../../components/Title/Title";
import {IRegister} from "./RegistrationContainer";
import {useAppSelector} from "../../redux/hook";

interface IRegistrationProps {
    handleOnInputChange: (obj: any) => void;
    register: IRegister;
    handleCheckPasswords: (e: any) => void;
    theme: string | undefined;
}

const Registration = ({ handleOnInputChange, register, handleCheckPasswords, theme }: IRegistrationProps) => {
    return (
        <div className={styles.registration}>
            <Title title={'Registration'} />
            <form className={theme === 'light' ? styles.register : `${styles.register} ${styles.registerDark}`} onSubmit={(e) => handleCheckPasswords(e)}>
                <input onChange={(e) => handleOnInputChange({...register, login: e.target.value})} className={styles.input} type="text" placeholder={'Your login'} required={true} value={register.login}/>
                <input onChange={(e) => handleOnInputChange({...register, password: e.target.value})} className={styles.input} type="password" placeholder={'Your password'} required={true} value={register.password}/>
                <input onChange={(e) => handleOnInputChange({...register, passwordRepeat: e.target.value})} className={styles.input} type="password" placeholder={'Repeat password'} required={true} value={register.passwordRepeat}/>
                <button type={"submit"} className={styles.button}>Register</button>
                {register.passwordHasError ? <div className={styles.error}>Ошибка! Пароли не совпадают</div> : null}
            </form>
        </div>
    )
}
export default Registration;