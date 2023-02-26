import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleImage } from '../../redux/slices/cardPreviewSlice';
import { IData } from '../types';
import styles from "./CardDesctope.module.css"


export const CardDesctop = ({ id, image, text, date, title }:  IData) => {
  const dispatch = useAppDispatch()


  const theme = useAppSelector((store) => store.theme.value)
  
  return (
    <div key={id} className={theme === 'light' ? styles.container : styles.containerDark} 
    >
      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.date}>{date}</p>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{text}</p>
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
