import React, { useState } from "react"
import styles from './Menu.module.css'
import { ThemeContext, useThemeContext } from "../../context/theme"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Burger from "../Burger/Burger"


const Menu = ({ changeSearch }: {changeSearch: (arg: string) => void}) => {
    const [open, setOpen] =useState(false)

    const navigate = useNavigate()

    const {theme, changeThemeFunction} = useThemeContext()

    const handleSearchChange = (event: any) => {
        changeSearch(event.target.value)
    }

    return (
        <div className={theme === 'light' ? styles.container : styles.containerDark}>
            <Burger open={open} setOpen={setOpen} />
            <input type="seacrh" placeholder="search..." onChange={(event) => handleSearchChange(event)} onFocus={() => navigate('/Search')} />
            <button onClick={() => changeThemeFunction?.()}>Change Theme</button>
            <div>User</div>
        </div>
    )
}


export default Menu