import React, { ForwardedRef, Ref, useContext, useEffect } from "react";
import { ThemeContext, useThemeContext } from "../../context/theme";
import HeaderMenuItem from "../HeaderMenuItem/HeaderMenuItem";
import styles from "./Header.module.css";

const Header = () => {
  // const { theme } = useThemeContext();
  const theme = useThemeContext();
  // useEffect(() => {
  //   theme.changeThemeFunc?.();
  // }, []);
  return (
    <div
      className={
        theme.theme === "light" ? styles.container : styles.containerDark
      }
    >
      <HeaderMenuItem title="menu" />
      <button onClick={theme.changeThemeFunc}>asd</button>
      <div className={styles.subContainer}>
        <HeaderMenuItem title="search" />
        <HeaderMenuItem title="user" />
      </div>
    </div>
  );
};

export default Header;
