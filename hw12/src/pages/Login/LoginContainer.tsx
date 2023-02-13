import React, {useState} from 'react';
import Login from "./Login";
import {usersApi} from "../../api/api";
import {useThemeContext} from "../../context/themeContext";

export interface IForm {
    username: string;
    password: string;
}

const LoginContainer = () => {

    const [form, setForm] = useState<IForm>({
        username: '',
        password: ''
    })

    const { theme, changeTheme } = useThemeContext();

    const handleOnInputChange = (obj: any) => {
        setForm(obj)
    }

    const handleButtonSubmit = (e: any) => {
        e.preventDefault();

        usersApi.getUsersAPI().then(response => {
                if(response.data.find((obj: any) => obj.login === form.username && obj.password === form.password)) {
                    localStorage.setItem('isAuthorized', 'true')
                    alert('Вы авторизованы')
                } else {
                    alert('Такого пользователя не существует')
                }
            })

        setForm({username: '', password: ''})
    }

    return <Login handleOnInputChange={handleOnInputChange} form={form} handleButtonSubmit={handleButtonSubmit} theme={theme}/>
}

export default LoginContainer;