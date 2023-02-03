import React from "react"
import styles from './ValidationSuccess.module.css'
import { useThemeContext } from "../../context/theme"


const ValidationSuccess = ({ result }: {result: string}) => {
    const theme = useThemeContext()
    return (
        <div className={theme.theme === 'light' ? styles.container : styles.containerDark}>
            <div>{result}!!!</div>
            <div>Login verified</div>
            <button>Continue</button>
        </div>
    )
}


export default ValidationSuccess