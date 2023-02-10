import React, { useContext } from "react"
// import { ThemeContext, useThemeContext } from "../../context/theme";
import { useNavigate } from "react-router-dom";
import styles from "./PageTemplate.module.css"
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeTheme } from "../../redux/slices/counterSlice";

interface IPageTemplate {
  children: React.ReactNode;
  title: string;
  linkName: string;
}



const PageTemplate = ({ children, title, linkName }: IPageTemplate ) => {

  const theme = useAppSelector((store) => store.theme.value)
  console.log(theme);

  return (
    <div className={theme === 'light' ? styles.container : styles.containerDark}>
      <div>
        <a className={styles.link} href="#">{linkName}</a>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  )
}

export default PageTemplate