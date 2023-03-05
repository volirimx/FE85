import React, { useState } from "react"
import Copyright from "../../components/Copyright/Copyright"
import LoginForm from "../../components/LoginForm/LoginForm"
import Menu from "../../components/Menu/Menu"
import styles from './Login.module.css'



interface IData {
    email: string
    password: string 
}

const Login = () => {
    const [data, setData] = useState(
        {
            email: '',
            password: ''
        })

        const changeData = (data: IData): void => setData(data)

    return (
        <div className={styles.container}>
            <LoginForm data={data} changeData={changeData} />
        </div>
    )
}

export default Login