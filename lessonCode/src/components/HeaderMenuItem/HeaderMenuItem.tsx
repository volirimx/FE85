import React from "react";
import styles from "./HeaderMenuItem.module.css";

interface HeaderMenuItemProps {
  title: string;
}

const HeaderMenuItem = ({ title }: HeaderMenuItemProps) => {
  return <div className={styles.container}>{title}</div>;
};

export default HeaderMenuItem;
