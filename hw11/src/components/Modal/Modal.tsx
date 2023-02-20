import React from 'react';
import styles from "./Modal.module.css";
import { showNextCard, showPrevCard, closeModal } from "../../redux/slices/ModalSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";




const Modal = () => {

    const card = useAppSelector((store) => store.modal.previewCard);
    const dispatch = useAppDispatch()
    
    // const nextPost = (event: any) => {
    //     event.stopPropagation()
    //     dispatch(showNextCard())
    // };

    // const prevPost = (event: any) => {
    //     event.stopPropagation()
    //     dispatch(showPrevCard())
    // };

    if (!card) return null; 
        return (
                <div className={styles.container}>
                    <div className={styles.box}>
                            <button onClick={() => dispatch(closeModal())} className={styles.button}>X</button>
                        <div>
                            <img className={styles.image} src={card.image}></img>
                        </div>
                        <div className={styles.switch}>
                            <button onClick={(e: any) => {
                                e.stopPropagation();
                                dispatch(showPrevCard());
                            }}>Previous</button>
                            <button onClick={(e: any) => {
                                e.stopPropagation();
                                dispatch(showNextCard());
                                
                            }}>Next</button>
                        </div>
                    </div>
                </div>
    ) 
};

export default Modal;