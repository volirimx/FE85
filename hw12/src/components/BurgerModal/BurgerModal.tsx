import React from 'react';
import styles from './BurgerModal.module.css';
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../redux/hook";
const BurgerModal = ({ user, theme }: { user: string, theme: string | undefined }) => {

    const registrationLogin = useAppSelector((state) => state.registration.userEmail);

    const getUserLOGO = (user: string): string => {
        return user.split(" ").map((n)=>n[0]).join("");
    }

    return (
        <div className={theme === 'light' ? styles.burgerModal : `${styles.burgerModal} ${styles.burgerModalDark}`}>
            <div className={styles.logo}>
                <div className={styles.userLogo}>{getUserLOGO(registrationLogin)}</div>
                <div className={styles.username}>{registrationLogin}</div>
            </div>
            <div className={styles.links}>
                <NavLink className={styles.link} to='/confirmed'>Подтверждение</NavLink>
                <NavLink className={styles.link} to='/login'>Авторизация</NavLink>
                <NavLink className={styles.link} to='/saved'>Мои посты</NavLink>
                <NavLink className={styles.link} to='/registration'>Регистрация</NavLink>
                <NavLink className={styles.link} to='/posts'>Посты</NavLink>
                <NavLink className={styles.link} to='/search'>Найти пост</NavLink>
            </div>
        </div>
    )
}
export default BurgerModal;