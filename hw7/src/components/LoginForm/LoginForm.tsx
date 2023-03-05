
import React, { useEffect } from "react"
import styles from './LoginForm.module.css'
import { useThemeContext } from "../../context/theme"
import { useJWTContext } from "../../context/authContext"
import { sign } from "crypto"
import { signIn } from "../../api/auth/auth"


interface IInput {
    data: {
        email: string 
        password: string 
    }
    changeData: (data: {email: string ; password: string }) => void
}



const LoginForm = ({ data, changeData }: IInput) => {
    const { setJWT, JWT } = useJWTContext()

    async function handleSubmitButtonClick (event: any) {
        event.preventDefault()
        const response = await signIn(data)
        setJWT?.(response.data)
        console.log(JWT);
        
    }
    const theme = useThemeContext()
    return (
        <form className={theme.theme === 'light' ? styles.container : styles.containerDark}>
            <div>Login : <input type="text" onChange={(event) => changeData({...data, email: event.target.value})} /></div>
            <div>Password : <input type="password" onChange={(event) => changeData({...data, password: event.target.value})} /></div>
            <button type="submit" onClick={(event) => handleSubmitButtonClick(event)}>Login</button>
        </form>
    )
}

export default LoginForm