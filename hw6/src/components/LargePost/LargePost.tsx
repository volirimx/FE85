import react from 'react';
import { IPost } from '../../types/index'
import styles from './LargePost.module.css';
import Controls from '../Controls/Controls';

const LargePost = ({ date, title, description, image }: IPost) => {
  return (
    <div className={styles.post} >
      <div className={styles.post__container}>
        <div className={styles.post__content}>
          <div className={styles.post__date}>{date}</div>
          <div className={styles.post__title}>{title}</div>
          <div className={styles.post__description}>{description}</div>
        </div>
        <div className={styles.post__img}>
          <img src={image} alt='Картинка' />
        </div>
      </div>
      <Controls />
    </div>
  )
};

export default LargePost;
