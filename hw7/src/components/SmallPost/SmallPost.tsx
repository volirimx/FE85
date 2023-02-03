import react from 'react';
import { IPostProps } from '../../types/index'
import styles from './SmallPost.module.scss';
import Controls from '../Controls/Controls';

const SmallPost = (props: IPostProps) => {
  return (
    <div className={styles.post} >
      <div className={styles.post__container}>
        <div className={styles.post__content}>
          <div className={styles.post__date}>{props.date}</div>
          <div className={styles.post__title}>{props.title}</div>
        </div>
        <div className={styles.post__img}>
          <img src={props.image} alt='Картинка' />
        </div>
      </div>
      <Controls />
    </div>
  )
};

export default SmallPost;
