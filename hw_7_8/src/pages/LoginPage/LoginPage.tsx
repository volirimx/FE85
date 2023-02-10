import React, { useState } from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import PageTemplate from "../PageTemplate/PageTemplate";
import styles from "./LoginPage.module.css"

export const LoginPage = () => {

  return (
    <PageTemplate title={"Sign In"} linkName={"Back to home"}>
      <div className={styles.wrapper}>
        <LoginForm />
      </div>
    </PageTemplate>
  );
};
