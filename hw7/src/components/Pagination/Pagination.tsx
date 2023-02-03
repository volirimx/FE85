import react, {useState} from 'react';
import { IPost } from '../../types/index'
import styles from './Pagination.module.scss';

interface IPagination {
  handleClickPrev(): void;
  handleClickNext(): void;
  buttonNextDisabled: boolean;
  buttonPrevDisabled: boolean;
}

const Pagination = ({ handleClickPrev, handleClickNext, buttonPrevDisabled, buttonNextDisabled }: IPagination) => {
  return (
    <div className={styles.container} >
      <button type='button' className={styles.paginationButton + ' ' + (buttonPrevDisabled ? styles.disabled : '')} disabled={buttonPrevDisabled}  onClick={handleClickPrev} >prev</button>
      <button type='button' className={styles.paginationButton + ' ' + (buttonNextDisabled ? styles.disabled : '')} disabled={buttonNextDisabled} onClick={handleClickNext}>next</button>
    </div>
  )
};

export default Pagination;
