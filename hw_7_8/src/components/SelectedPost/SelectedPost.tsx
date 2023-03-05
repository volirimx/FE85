import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { favoriteCard } from '../../redux/slices/cardSlice';
import { IData } from '../types';
import styles from "./SelectedPost.module.css"


export const SelectedPost = ({ id, image, date, title, description }:  IData) => {
  
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleremoveFromFavorite = (e: any) => {
    e.stopPropagation();
    dispatch(favoriteCard(id))
}


  return (
    <div key={id} className={styles.container} onClick={() => navigate(`${id}`)}>
      <div className={styles.content}>
      <div className={styles.text}>
          <p className={styles.title}>{title}</p>
        </div>
        <div>
          <img className={styles.image} src={image} alt={title} />
        </div>
        <div className={styles.text}>
          <p className={styles.date}>{date}</p>
          <p className={styles.description}>{description}</p>
        </div>

      </div>
      <div className={styles.contols}>
        <div className={styles.button}>
          <div>
            <button className={styles.btnLike}></button>
            <button className={styles.btnDisLike}></button>
          </div>
          <div>
            <button className={styles.bookmark} onClick={handleremoveFromFavorite}></button>
          </div>
        </div>
      </div>
    </div>
  );
};
