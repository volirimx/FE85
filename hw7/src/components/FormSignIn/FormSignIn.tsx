import React, { useState, useRef, useEffect } from 'react';
import styles from './FormSignIn.module.scss'

interface IForm {
  email: string;
  password: string;
}

const FormSignIn = () => {
  const [form, setForm] = useState<IForm>({
    email: '',
    password: ''
  })

  const handleChangeInputValue = (event: any) => {
    const target = event.target
    setForm({
      ...form,
      [target.name]: target.value,
    })
    console.log(form);

  }

  const handleSubmitButtonClick = (event: any) => {
    event.preventDefault()
  }

  return (
      <div className={styles.container}>
        <form className={styles.form} >
          <div className={styles.label}>
            email
          </div>
          <input className={styles.input} type='email' name='email' onChange={handleChangeInputValue} />
          <div className={styles.label}>
            password
          </div>
          <input className={styles.input} type='password' name='password' onChange={handleChangeInputValue} />
          <button type='submit' className={styles.buttonSignIn} onClick={handleSubmitButtonClick}>sign in</button>
        </form>
      </div>
  )
}

export default FormSignIn;
