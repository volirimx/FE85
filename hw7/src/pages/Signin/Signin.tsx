import Copyright from "../../components/Copyright/Copyright"
import Menu from "../../components/Menu/Menu"
import React, { useState } from "react"

import styles from '../Success/Success.module.css'
import SigninForm from "../../components/SigninForm/SigninForm"

interface IData {
    login: string;
    password: string;
    repeatedPass: string
}


const Signin = () => {
    const [data, setData] = useState(
        {
            login: '',
            password: '',
            repeatedPass: ''
        })

        const changeData = (data: IData ): void => setData(data)

    return (
        <div className={styles.container}>
            <Menu />
            <SigninForm data={data} changeData={changeData} />
            <Copyright />
        </div>
    )
}



export default Signin