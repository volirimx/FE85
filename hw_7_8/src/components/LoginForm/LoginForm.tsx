import React, { useState } from "react";
import styles from "./LoginForm.module.css"

export interface ILoginForm {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [loginForm, setLoginForm] = useState<ILoginForm>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: any) => {
    const target = event.target
    setLoginForm({
      ...loginForm,
      [target.name]: target.value,
    })
    console.log(loginForm);
  }

  const handleSubmitButtonClick = (event: any) => {
    event.preventDefault()
    console.log(loginForm)
  }

  return (
      <div className={styles.container}>
        <form className={styles.loginForm} >
          <div className={styles.label}>
            Email
          </div>
          <input className={styles.input} type='email' name='email' placeholder='Your email' onChange={handleInputChange} />
          <div className={styles.label}>
            Password
          </div>
          <input className={styles.input} type='password' name='password' placeholder='Your password' onChange={handleInputChange} />
          <button type='submit' className={styles.buttonLogin} onClick={handleSubmitButtonClick}>Sign in</button>
          <div className={styles.text}>Don't have an account? <span>Sign Up</span></div>
        </form>
      </div>
  );
};
