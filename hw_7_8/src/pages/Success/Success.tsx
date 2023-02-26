import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { useAppSelector } from "../../redux/hooks";
import PageTemplate from "../PageTemplate/PageTemplate";
import styles from "./Success.module.css"

export const Success = () => {

  const theme = useAppSelector((store) => store.theme.value)
  const navigate = useNavigate()

  return (
    <PageTemplate title={"Success"} linkName={"Back to home"}>
      <div className={styles.wrapper}>
        <div className={theme === 'light' ? styles.container : styles.containerDark} >
          <div className={styles.text}>
            <p>Email confirmed</p>
            <p>Your registration is now completed</p>
          </div>
          <button className={styles.btn} onClick={() => navigate('/Posts')}>Go to home</button>
        </div>
      </div>
    </PageTemplate>
  );
};
