import React, { useEffect, useState } from "react";
import styles from "./SignUp.module.css"

export interface ISignUp{
  email: string;
  password: string;
  repeatPassword: string;
}

export const SignUp = () => {
  const [signUp, setSignUp] = useState<ISignUp>({
    email: "",
    password: "",
    repeatPassword: ""
  });


  const handleInputChange = (event: any) => {
    const target = event.target
    setSignUp({
      ...signUp,
      [target.name]: target.value,
    })
    console.log(signUp);
  }

  const handleSubmitButtonClick = (event: any) => {
    event.preventDefault()
    if (signUp.password !== signUp.repeatPassword) {
      alert ('Not match')
    }
    alert('Enter allowed')
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
          <div className={styles.label}>
            Repeat password
          </div>
          <input className={styles.input} type='password' name='repeatPassword' placeholder='Repeat your password' onChange={handleInputChange} />
          <button type='submit' className={styles.buttonLogin} onClick={handleSubmitButtonClick}>Sign Up</button>
        </form>
      </div>
  );
};
