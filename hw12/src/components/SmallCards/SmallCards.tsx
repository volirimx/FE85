import React from "react";
import styles from "./SmallCards.module.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { openModal, Card } from "../../redux/slices/ModalSlice";
import { getFavoritePost } from "../../redux/slices/FavoriteSlice";



interface ISmallCard {
    card: Card;
}

const SmallCard = ({card}: ISmallCard) => {

    const dispatch = useAppDispatch()

    const previewCard = (event: any) => {
        event.preventDefault();
        dispatch(openModal(card))
    }
    const favoritePost = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(getFavoritePost(card.id))
    }

    const navigate = useNavigate()

    // const favCard = (event: any) => {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     let ind = card.favorite 
    //     ind = true
        
    //     if ( ind === true && !favorite.includes(card) ) {
    //         console.log(favorite);
    //         return favorite.push(card);
    //     } else return;
    // }

    return (
        <div>
            <button onClick={previewCard}>Show</button>
            <div className={styles.card} onClick={() => navigate(`${card.id}`) }>
                <div className={styles.content}>
                    <div>
                        <div className={styles.date}>{card.date}</div>
                        <div className={styles.title}>{card.title}</div>
                    </div>
                    <div>
                        <img className={styles.image} src={card.image}></img>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.buttonlike}>
                        <button className={styles.button}>👍</button>
                        <button className={styles.button}>👎</button>
                    </div>
                    <div className={styles.buttonsave}>
                        <button className={styles.button} onClick={favoritePost}>☆</button>
                        <button className={styles.button}>...</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallCard;
