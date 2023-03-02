import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../api/auth/auth";
import { useJWTContext } from "../../context/auth";
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
  }

  const {setJWT, jwt} = useJWTContext()

  async function handleSubmitButtonClick (event: any) {
    event.preventDefault()
    const response = await signIn(loginForm)
    setJWT?.(response.data)
  }

  console.log(jwt);
  

  const navigate = useNavigate()

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
          <div className={styles.text}>Don't have an account? <span onClick={() => navigate('/Signup')}>Sign Up</span></div>
        </form>
      </div>
  );
};
