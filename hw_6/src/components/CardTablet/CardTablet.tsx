import React, { useState } from 'react';
import { IData } from '../types';

import styles from "./CardTablet.module.css"

export const CardTablet = ({ id, image, date, title }:  IData) => {
  return (
    <div key={id} className={styles.container}>
      <div className={styles.content}>
      <div >
          <img className={styles.image} src={image} alt={title} />
        </div>
        <div className={styles.text}>
          <p className={styles.date}>{date}</p>
          <p className={styles.title}>{title}</p>
        </div>
      
      </div>
      <div className={styles.contols}>
        <div className={styles.button}>
          <div>
            <button className={styles.btnLike}></button>
            <button className={styles.btnDisLike}></button>
          </div>
          <div>
            <button className={styles.bookmark}></button>
            <button className={styles.more}></button>
          </div>
        </div>
      </div>
    </div>
  );
};
