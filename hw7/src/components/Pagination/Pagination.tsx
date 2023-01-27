import react, {useState} from 'react';
import { IPost } from '../../types/index'
import styles from './Pagination.module.scss';

interface IPagination {
  handleClickPrev(): void;
  handleClickNext(): void;
}

const Pagination = ({ handleClickPrev, handleClickNext }: IPagination) => {
  return (
    <div className={styles.container} >
      <button type='button' className={styles.prev} onClick={handleClickPrev}>prev</button>
      <button type='button' className={styles.next} onClick={handleClickNext}>next</button>
    </div>
  )
};

export default Pagination;
