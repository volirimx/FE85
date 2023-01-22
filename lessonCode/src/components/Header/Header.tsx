import React from "react";
import HeaderMenuItem from "../HeaderMenuItem/HeaderMenuItem";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <HeaderMenuItem title="menu" />
      <div className={styles.subContainer}>
        <HeaderMenuItem title="search" />
        <HeaderMenuItem title="user" />
      </div>
    </div>
  );
};

export default Header;
