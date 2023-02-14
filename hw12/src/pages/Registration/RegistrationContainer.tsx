import React, {useState} from 'react';
import axios from "axios";
import Registration from "./Registration";
import login from "../Login/Login";
import {usersApi} from "../../api/api";
import {useThemeContext} from "../../context/themeContext";
import {useAppDispatch, useAppSelector} from "../../redux/hook";
import {authUserThunk} from "../../redux/slices/registrationSlice";

export interface IRegister {
    login: string;
    password: string;
    passwordRepeat: string;
    passwordHasError: boolean;
}

const RegistrationContainer = () => {

    const dispatch = useAppDispatch();

    const [register, setRegister] = useState<IRegister>({
        login: '',
        password: '',
        passwordRepeat: '',
        passwordHasError: false
    });

    const { theme, changeTheme } = useThemeContext();


    const registerUserAPI = () => {

        // (async function postUserAxios() {
        //     try {
        //         const response = await usersApi.findUserByLoginAPi(register.login)
        //         if(!response.data.length) {
        //             await usersApi.postUserAPI({
        //                 login: register.login,
        //                 password: register.password
        //             })
        //             alert('Регистрация прошла успешно!')
        //         } else {
        //             alert('Такой пользователь уже существует!')
        //         }
        //     } catch (error) {
        //         console.log(error)
        //     }
        // })();

        // обнуление полей
        setRegister({
            login: '',
            password: '',
            passwordRepeat: '',
            passwordHasError: false
        })
    }

    const handleCheckPasswords = (e: any) => {
        e.preventDefault();

        // проверка на совпадение паролей
        if(register.password === register.passwordRepeat) {
            dispatch(authUserThunk({login: register.login, password: register.password}));
            // обнуление полей
            setRegister({
                login: '',
                password: '',
                passwordRepeat: '',
                passwordHasError: false
            })
        } else {
            setRegister({...register, passwordHasError: true})
        }
    }

    const handleOnInputChange = (obj: any): void => {
        setRegister(obj)
    }

    return <Registration handleOnInputChange={handleOnInputChange} register={register} handleCheckPasswords={handleCheckPasswords} theme={theme}/>
}
export default RegistrationContainer;


