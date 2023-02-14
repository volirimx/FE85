import react from 'react';
import { IPostProps } from '../../types/index'
import styles from './LargePost.module.scss';
import Controls from '../Controls/Controls';

const LargePost = (props: IPostProps) => {
  return (
    <div className={styles.post} >
      <div className={styles.post__container}>
        <div className={styles.post__content}>
          <div className={styles.post__date}>{props.date}</div>
          <div className={styles.post__title}>{props.title}</div>
          <div className={styles.post__description}>{props.description}</div>
        </div>
        <div className={styles.post__img}>
          <img src={props.image} alt='Картинка' />
        </div>
      </div>
      <Controls id={props.id.toString()} />
    </div>
  )
};

export default LargePost;
