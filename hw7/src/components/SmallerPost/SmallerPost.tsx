import React from "react";
import styles from './SmallerPost.module.css'
import { useThemeContext } from "../../context/theme";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { openModal } from "../../redux/slices/modalSlice";
import { changeFavourites } from "../../redux/slices/cardSlice";



interface IPost {
    id: number;
    image: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    description: string;
    author: number;
}




const SmallerPost = ({ image, text, date, lesson_num, title, description, author, id}: IPost) => {
    const dispatch = useAppDispatch()
    const theme = useThemeContext()
    const navigate = useNavigate()
    const handlePreviewButtonClick = (e: any) => {
        e.preventDefault()
        dispatch(openModal({
            value: true,
            card: {
                image: image,
                text: title
            }
        }))
    }
    const handleInFavouritesButtonClick = () => {
        dispatch(changeFavourites(id))
    }
    return (
        <>
        <div className={theme.theme === 'light' ? styles.container : styles.containerDark} onClick={() => navigate(`${id}`)}>
            <img src={image} alt="" className={styles.image}/>
            <div className={styles.textcontent}>
                <h1>{title}</h1>
                <div>{lesson_num}</div>
                <div>{text}</div>
                <div>{`Author: ${author}`}</div>
                <div>{date}</div>
            </div>
        </div>
        <button onClick={handlePreviewButtonClick}>Preview</button>
        <button onClick={handleInFavouritesButtonClick}>In Favourites</button>
        </>
    )
}


export default SmallerPost