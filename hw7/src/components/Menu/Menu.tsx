import React from "react"
import styles from './Menu.module.css'
import { ThemeContext, useThemeContext } from "../../context/theme"
import { useContext } from "react"


const Menu = ({ changeSearch }: {changeSearch: (arg: string) => void}) => {

    const {theme, changeThemeFunction} = useThemeContext()

    const handleSearchChange = (event: any) => {
        changeSearch(event.target.value)
    }

    return (
        <div className={theme === 'light' ? styles.container : styles.containerDark}>
            <div>Menu</div>
            <input type="seacrh" placeholder="search..." onChange={(event) => handleSearchChange(event)} />
            <button onClick={() => changeThemeFunction?.()}>Change Theme</button>
            <div>User</div>
        </div>
    )
}


export default Menu