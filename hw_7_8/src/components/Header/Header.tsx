import React from "react"
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeTheme } from "../../redux/slices/counterSlice";
import styles from "./Header.module.css"


const Header = () => {
    const theme = useAppSelector((store) => store.theme.value)
    console.log(theme);

    const dispatch = useAppDispatch()

    const handleButtonClick = () =>  {
      dispatch(changeTheme())
    }

  return (
    <div>
      <div className={theme === 'light' ? styles.container : styles.containerDark} >
        <div className={styles.menu}></div>
        <div className={styles.subContainer}>
          <div className={styles.search} ></div>
          <div className={styles.user}></div>
        </div>
      </div>
      <button className={styles.btn} onClick={handleButtonClick}>Change theme</button>
    </div>
  )
}

export default Header