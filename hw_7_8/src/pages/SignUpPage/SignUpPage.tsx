import React, { useState } from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { SignUp } from "../../components/SignUp/SignUp";
import PageTemplate from "../PageTemplate/PageTemplate";
import styles from "./SignUpPage.module.css"

export const SignUpPage = () => {

  return (
    <PageTemplate title={"Sign Up"} linkName={"Back to home"}>
      <div className={styles.wrapper}>
        <SignUp />
      </div>
    </PageTemplate>
  );
};
