import React from "react"
import styles from './Menu.module.css'


const Menu = () => {
    return (
        <div className={styles.container}>
            <div>Menu</div>
            <input type="seacrh" placeholder="search..." />
            <div>User</div>
        </div>
    )
}


export default Menu