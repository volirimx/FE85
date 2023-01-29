import React, { useState } from 'react';
import styles from "./CardMobile.module.css"
import { IData } from '../types';

export const CardMobile = ({ id, image, date, title }:  IData) => {

  return (
    <div key={id} className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.date}>{date}</p>
          <p className={styles.title}>{title}</p>
        </div>
        <div >
          <img className={styles.image} src={image} alt={title} />
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
