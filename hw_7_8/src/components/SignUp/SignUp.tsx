import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { registerUser } from "../../redux/slices/userSlice";
import { LoginForm } from "../LoginForm/LoginForm";
import styles from "./SignUp.module.css"

export interface ISignUp{
  username: string;
  email: string;
  password: string
}

export const SignUp = () => {
  const [signUp, setSignUp] = useState<ISignUp>({
    username: "",
    email: "",
    password: ""
  });

  const dispatch = useAppDispatch()

  const handleInputChange = (event: any) => {
    const target = event.target
    setSignUp({
      ...signUp,
      [target.name]: target.value,
    })
    console.log(signUp);
  }

  const handleRegister = (e: any) =>  {
    e.preventDefault()
    dispatch(registerUser(signUp))
  }

  return (
      <div className={styles.container}>
        <form className={styles.loginForm} >
        <div className={styles.label}>
            Username
          </div>
          <input className={styles.input} type='text' name='username' placeholder='Your username' onChange={handleInputChange} />
          <div className={styles.label}>
            Email
          </div>
          <input className={styles.input} type='email' name='email' placeholder='Your email' onChange={handleInputChange} />
          <div className={styles.label}>
            Password
          </div>
          <input className={styles.input} type='password' name='password' placeholder='Your password' onChange={handleInputChange} />        
          <button type='submit' className={styles.buttonLogin} onClick={handleRegister}>Sign Up</button>
        </form>
      </div>
  );
};
