import react from 'react';
import { IPost } from '../../types/index'
import styles from './SmallPost.module.css';
import Controls from '../Controls/Controls';

const SmallPost = ({ date, title, image }: IPost) => {
  return (
    <div className={styles.post} >
      <div className={styles.post__container}>
        <div className={styles.post__content}>
          <div className={styles.post__date}>{date}</div>
          <div className={styles.post__title}>{title}</div>
        </div>
        <div className={styles.post__img}>
          <img src={image} alt='Картинка' />
        </div>
      </div>
      <Controls />
    </div>
  )
};

export default SmallPost;
