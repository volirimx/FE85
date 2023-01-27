import react from 'react';
import { IPost } from '../../types/index'
import styles from './MediumPost.module.scss';
import Controls from '../Controls/Controls';

const MediumPost = ({ date, title, image }: IPost) => {
  return (
    <div className={styles.post} >
      <div className={styles.post__container}>
        <div className={styles.post__date}>{date}</div>
        <div className={styles.post__title}>{title}</div>
        <div className={styles.post__img}>
          <img src={image} alt='Картинка' />
        </div>
      </div>
      <Controls />
    </div>
  )
};

export default MediumPost;
