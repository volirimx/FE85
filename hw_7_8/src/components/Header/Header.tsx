import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeTheme } from "../../redux/slices/counterSlice";
import BurgerMenu from "../BurgerMenu/BurerMenu";
import styles from "./Header.module.css"


const Header = () => {
  const [open, setOpen] = useState(false)
  
    const theme = useAppSelector((store) => store.theme.value)
    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const handleButtonClick = () =>  {
      dispatch(changeTheme())
    }

  return (
    <div>
      <div className={theme === 'light' ? styles.container : styles.containerDark} >
      <BurgerMenu open={open} setOpen={setOpen} />
        <div className={styles.menu}></div>
        <div className={styles.subContainer}>
          <div className={styles.search} onClick={() => navigate('/Search')}></div>
          <div className={styles.user}></div>
        </div>
      </div>
      <button className={styles.btn} onClick={handleButtonClick}>Change theme</button>
    </div>
  )
}

export default Header