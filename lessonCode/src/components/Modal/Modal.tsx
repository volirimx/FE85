import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleImage } from "../../redux/slices/cardPreviewSlice";
import {
  closeCardPreview,
  showNextCard,
  showPrevCard,
} from "../../redux/slices/cards";
import styles from "./Modal.module.css";
const Modal = () => {
  const activeCard = useAppSelector((store) => store.cards.previewCard);
  const dispatch = useAppDispatch();
  if (!activeCard) return null;
  return (
    <div
      className={styles.container}
      onClick={(e) => {
        console.log("1");
        dispatch(closeCardPreview());
      }}
    >
      <div className={styles.modalBody}>
        <div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch(showPrevCard());
            }}
          >
            prev
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch(showNextCard());
            }}
          >
            next
          </button>
        </div>
        <img src={activeCard.image} className={styles.image} />
      </div>
    </div>
  );
};

export default Modal;
