import React, { ForwardedRef, Ref, useContext, useEffect } from "react";
import { ThemeContext, useThemeContext } from "../../context/theme";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import HeaderMenuItem from "../HeaderMenuItem/HeaderMenuItem";
import styles from "./Header.module.css";

const Header = () => {
  const theme = useThemeContext();
  const username = useAppSelector((store) => store.user.username);
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(incrementByAmount(12));
  // }, []);
  // const counter = useAppSelector((store) => store.counter.value);
  // console.log(counter);

  return (
    <div
      className={
        theme.theme === "light" ? styles.container : styles.containerDark
      }
    >
      <HeaderMenuItem title="menu" />
      <span style={{ color: "white" }}>{username}</span>
      <div className={styles.subContainer}>
        <HeaderMenuItem title="search" />
        <HeaderMenuItem title="user" />
      </div>
    </div>
  );
};

export default Header;
