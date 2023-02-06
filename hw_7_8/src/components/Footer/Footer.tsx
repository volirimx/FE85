import React from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeTheme } from "../../redux/slices/counterSlice";
import styles from "./Footer.module.css"

const Footer = () => {

  const theme = useAppSelector((store) => store.theme.value)

  return (
    <div className={theme === 'light' ? styles.wrapper : styles.wrapperDark}>
      <div className={styles.container}>
        <div>2022 Copyright</div>
        <div>All Rights Resereved</div>
      </div>
    </div>
  )
}

export default Footer