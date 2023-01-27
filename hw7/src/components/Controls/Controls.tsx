import react from 'react';
import styles from './Controls.module.scss';

const Controls = () => {
  return (
    <div className={styles.controls}>
      <div>
        <button className={styles.button + ' ' + styles.buttonLike} type="button" ></button>
        <button className={styles.button + ' ' + styles.buttonDislike} type="button" ></button>
      </div>
      <div>
        <button className={styles.button + ' ' + styles.buttonBookmark} type="button" ></button>
        <button className={styles.button + ' ' + styles.buttonMenu} type="button" ></button>
      </div>
    </div>
  );
};

export default Controls;
