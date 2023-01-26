import React from "react"
import styles from './ValidationSuccess.module.css'


const ValidationSuccess = ({ result }: {result: string}) => {
    return (
        <div className={styles.container}>
            <div>{result}!!!</div>
            <div>Login verified</div>
            <button>Continue</button>
        </div>
    )
}


export default ValidationSuccess