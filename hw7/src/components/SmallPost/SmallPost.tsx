import react, {useState} from 'react';
import { IPostProps } from '../../types/index'
import styles from './SmallPost.module.scss';
import Controls from '../Controls/Controls';
import {useNavigate} from 'react-router-dom'
import { useAppDispatch } from '../../redux/hooks';
import { showPost } from '../../redux/slices/modalSlice';

const SmallPost = (props: IPostProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleButtonClick = (event: any) => {
    event.stopPropagation();
    console.log(props)
    dispatch(showPost(props))
  }
  return (
    <div className={styles.post} onClick={() => navigate(`${props.id}`)} >
      <div className={styles.post__container}>
        <div className={styles.post__content}>
          <div className={styles.post__date}>{props.date}</div>
          <div className={styles.post__title}>{props.title}</div>
        </div>
        <div className={styles.post__img}>
          <img src={props.image} alt='Картинка' />
        </div>
      </div>
      <button id={props.id.toString()} onClick={handleButtonClick} className={styles.button}>Preview</button>
      <Controls id={props.id.toString()}/>
    </div>
  )
};

export default SmallPost;
