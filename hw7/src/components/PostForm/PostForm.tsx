import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setPost } from '../../redux/slices/postSlice'
import { IPost } from '../../types'
import styles from './PostForm.module.scss'


const PostForm = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector(store => store.post)
  const [form, setForm] = useState<IPost>({
    id: 0,
    image: '',
    text: '',
    date: '',
    lesson_num: 0,
    title: '',
    description: '',
    author: ''
  })

  const handleChangeInputValue = (event: any) => {
    const target = event.target
    setForm({
      ...form,
      [target.name]: target.value,
    })

  }

  const handleSubmitButtonClick = (event: any) => {
    event.preventDefault()
    console.log(form);
    dispatch(setPost(form))
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} >
        <div className={styles.label}>
          image
        </div>
        <input className={styles.input} type='text' name='image' onChange={handleChangeInputValue} required />
        <div className={styles.label}>
          text
        </div>
        <input className={styles.input} type='text' name='text' onChange={handleChangeInputValue} required />
        <div className={styles.label}>
          lesson_num
        </div>
        <input className={styles.input} type='text' name='lesson_num' onChange={handleChangeInputValue} required />
        <div className={styles.label}>
          title
        </div>
        <input className={styles.input} type='text' name='title' onChange={handleChangeInputValue} required />
        <div className={styles.label}>
          description
        </div>
        <input className={styles.input} type='text' name='description' onChange={handleChangeInputValue} required />
        <div className={styles.label}>
          author
        </div>
        <input className={styles.input} type='text' name='author' onChange={handleChangeInputValue} />
        <button type='submit' className={styles.buttonSignIn} onClick={handleSubmitButtonClick}>sign in</button>
      </form>
    </div>
  )
}

export default PostForm
