import react from 'react';
import styles from './Controls.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { save } from '../../redux/slices/cardSlice';

interface ISavedPost {
  id: string;
}

const Controls = ({id}: ISavedPost) => {
  const dispatch = useAppDispatch()

  const handleClickSave = (event: any) => {
    event.stopPropagation();
    dispatch(save(+id))
  }

  return (
    <div className={styles.controls}>
      <div>
        <button className={styles.button + ' ' + styles.buttonLike} type="button"><span></span></button>
        <button className={styles.button + ' ' + styles.buttonDislike} type="button" ><span></span></button>
      </div>
      <div>
        <button className={styles.button + ' ' + styles.buttonBookmark} type="button" onClick={handleClickSave}><span></span></button>
        <button className={styles.button + ' ' + styles.buttonMenu} type="button" ><span></span></button>
      </div>
    </div>
  );
};

export default Controls;
