import React from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "./Modal.module.css"
import {
  closeCardPreview,
  showNextCard,
  showPrevCard,
} from "../../redux/slices/cardSlice";


const Modal = () => {

  const card = useAppSelector((store) => store.cards.previewCard);
  const dispatch = useAppDispatch()

  if (!card) return null; 
      return (
              <div className={styles.wrapper}>
                  <div className={styles.modal}>
                        <button onClick={() => dispatch(closeCardPreview())} className={styles.button}>X</button>
                      <div>
                          <img className={styles.image} src={card.image} />
                      </div>
                      <div className={styles.butn}>
                          <button className={styles.btn} onClick={(e: any) => {
                              e.stopPropagation();
                              dispatch(showPrevCard());
                          }}>Prev</button>
                          <button className={styles.btn} onClick={(e: any) => {
                              e.stopPropagation();
                              dispatch(showNextCard());
                          }}>Next</button>
                      </div>
                  </div>
              </div>
  ) 
};

export default Modal;