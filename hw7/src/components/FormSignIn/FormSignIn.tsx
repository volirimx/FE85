import React, { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import userSlice, {registerUser} from '../../redux/slices/userSlice'
import {store} from '../../redux/store'
import styles from './FormSignIn.module.scss'

interface IForm {
  username: string;
  email: string;
  password: string;
}

const FormSignIn = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector(store => store.user)
  const [form, setForm] = useState<IForm>({
    username: '',
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
    dispatch(registerUser(form))
  }

  return (
      <div className={styles.container}>
        <form className={styles.form} >
        <div className={styles.label}>
          username
        </div>
        <input className={styles.input} type='text' name='username' onChange={handleChangeInputValue} />
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
        <div>{selector.id}</div>
      </div>
  )
}

export default FormSignIn;
