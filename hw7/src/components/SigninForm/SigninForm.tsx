

import React from "react"
import styles from './SigninForm.module.css'
import { useThemeContext } from "../../context/theme";

interface IData {
    login: string;
    password: string;
    repeatedPass: string
}
interface ISigninForm {
    data: IData
    changeData: (arg: IData) => void
}



const SigninForm = ( { data, changeData }: ISigninForm ) => {


    function handleSubmitButtonClick (event: any) {
        event.preventDefault()
        if (data.password !== data.repeatedPass) {
            alert('Passwords does not match')
        }
        alert ('Success!!!')
    }
    const theme = useThemeContext()

    return (
        <form className={theme.theme === 'light' ? styles.container : styles.containerDark}>
            <div>Login:  <input type="text" onChange={(event) => changeData({...data, login: event.target.value})} /></div>
            <div>Password:  <input type="password" onChange={(event) => changeData({...data, password: event.target.value})} /></div> 
            <div>Repeat Password:  <input type="password" onChange={(event) => changeData({...data, repeatedPass: event.target.value})} /></div>
            <button type="submit" onClick={(event) => handleSubmitButtonClick(event)}>Sign In</button>
        </form>
    )
}



export default SigninForm