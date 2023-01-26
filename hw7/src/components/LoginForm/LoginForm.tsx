
import React from "react"
import styles from './LoginForm.module.css'


interface IInput {
    data: {
        login: string 
        password: string 
    }
    changeData: (data: {login: string ; password: string }) => void
}



const LoginForm = ({ data, changeData }: IInput) => {

    function handleSubmitButtonClick (event: any) {
        event.preventDefault()
        console.log(data)
    }
    return (
        <form className={styles.container}>
            <div>Login : <input type="text" onChange={(event) => changeData({...data, login: event.target.value})} /></div>
            <div>Password : <input type="password" onChange={(event) => changeData({...data, password: event.target.value})} /></div>
            <button type="submit" onClick={(event) => handleSubmitButtonClick(event)}>Login</button>
        </form>
    )
}

export default LoginForm