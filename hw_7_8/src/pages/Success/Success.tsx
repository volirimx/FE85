import React, { useState } from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import PageTemplate from "../PageTemplate/PageTemplate";
import styles from "./Success.module.css"

export const Success = () => {

  return (
    <PageTemplate title={"Success"} linkName={"Back to home"}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.text}>
            <p>Email confirmed</p>
            <p>Your registration is now completed</p>
          </div>
          <button className={styles.btn}>Go to home</button>
        </div>
      </div>
    </PageTemplate>
  );
};
