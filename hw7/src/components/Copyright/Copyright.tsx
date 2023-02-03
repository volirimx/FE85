import React from "react"
import styles from './Copyright.module.css'
import { useThemeContext } from "../../context/theme"



const Copyright = () => {

    const theme = useThemeContext()
    return (
        <div className={theme.theme === 'light' ? styles.container : styles.containerDark}>
            <div>© 2023 Peetouch inc</div>
            <div>All rights reserved</div>
        </div>
    )
}


export default Copyright