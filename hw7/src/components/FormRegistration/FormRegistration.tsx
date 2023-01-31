import React, { useState, useRef, useEffect } from 'react';
import styles from './FormRegistration.module.scss'

interface IForm {
  email: string;
  password: string;
  repeatedPassword: string;
  validRepeatedPassword: boolean;
}

const FormRegistration = () => {
  const [form, setForm] = useState<IForm>({
    email: '',
    password: '',
    repeatedPassword: '',
    validRepeatedPassword: false
  })

  useEffect(() => {
    if (form.password === form.repeatedPassword) form.validRepeatedPassword = true
    else form.validRepeatedPassword = false
  }, [form.repeatedPassword, form.password])

  const handleChangeInputValue = (event: any) => {
    const target = event.target
    setForm({
      ...form,
      [target.name]: target.value,
    })
    console.log(form)
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
        <div className={styles.label}>
          repeated password
        </div>
        <input className={styles.input + ' ' + (form.validRepeatedPassword ? styles.valid : styles.inValid)} type='password' name='repeatedPassword' onChange={handleChangeInputValue} />
        <button type='submit' className={styles.buttonRegistration} onClick={handleSubmitButtonClick}>sign in</button>
      </form>
    </div>
  )
}

export default FormRegistration;
