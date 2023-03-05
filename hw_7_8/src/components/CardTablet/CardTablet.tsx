import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Post } from '../../api/post/post';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Card, dislikeCard, favoriteCard, likeCard, openCardPreview } from '../../redux/slices/cardSlice';
import styles from "./CardTablet.module.css"

interface ICard {
  card: Card;
}

export const CardTablet = ({ card }:  ICard) => {

  const theme = useAppSelector((store) => store.theme.value)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const favoritePost = (e: any) => {
    e.stopPropagation();
    dispatch(favoriteCard(card.id))
}

  return (
    <div key={card.id} className={theme === 'light'? styles.container : styles.containerDark}  >
      <div className={styles.content} onClick={() => navigate(`${card.id}`)}>
        <div>
          <img className={styles.image} src={card.image} alt={card.title} />
        </div>
        <div className={styles.text}>
          <p className={styles.date}>{card.date}</p>
          <p className={styles.title}>{card.title}</p>
        </div>
      </div>
      <div className={styles.contols}>
        <div className={styles.button}>
          <div>
            <button className={styles.btnLike} 
              onClick={(e) => {
                e.stopPropagation();
                dispatch(likeCard(card.id))
            }}
              ></button>
            <button className={styles.btnDisLike} 
              onClick={(e) => {
                e.stopPropagation(); 
                dispatch(dislikeCard(card.id))
            }}
            ></button>
          </div>
          <div>
            <button className={styles.bookmark} 
            onClick={favoritePost}
            ></button>
            <button className={styles.more}></button>
          </div>
        </div>
        <button className={styles.readMore} 
        onClick={() => {
        dispatch(openCardPreview(card));
      }}
      >Preview</button>
      </div>
    </div>
  );
};
