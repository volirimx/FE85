import React from "react";
import styles from './PostMD.module.css'
import {IPostProps} from "../../../pages/Posts/Posts";
import {useNavigate} from "react-router-dom";
import {useThemeContext} from "../../../context/themeContext";
import likeLight from '../../../assets/images/likeLight.svg';
import dislikeLight from '../../../assets/images/dislikeLight.svg';
import addPostIcon from '../../../assets/images/addPost.svg';
import {useAppDispatch} from "../../../redux/hook";
import {dislikePost, likePost, setPostModalData, togglePostModalIsOpen} from "../../../redux/slices/postsSlice";
import {addPostToSaved} from "../../../redux/slices/savedSlice";

const PostMD = (props: IPostProps) => {

    console.log('postMD is render')

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { theme, changeTheme } = useThemeContext();

    const getDate = () => {
        const date = new Date(props.date);
        return date.toLocaleString()
    }

    const handleNavigateUser = () => {
        navigate(`/post/${props.id}`)
    }

    const handleButtonMoreClick = (e: any) => {
        e.stopPropagation();
        dispatch(togglePostModalIsOpen());
        dispatch(setPostModalData({id: props.id, image: props.image}))
    }

    const handleLikePost = (e: any) => {
        e.stopPropagation();
        dispatch(likePost(props.id))
    }

    const handleDislikePost = (e: any) => {
        e.stopPropagation();
        dispatch(dislikePost(props.id))
    }

    const handleAddPostToSaved = (e: any) => {
        e.stopPropagation();
        dispatch(addPostToSaved({
            title: props.title,
            description: props.description,
            image: props.image,
            id: props.id
        }));
        alert('Пост добавлен!');
    }

    return (
        <div className={theme === 'light' ? styles.wrapper : `${styles.wrapper} ${styles.wrapperDark}`} onClick={handleNavigateUser}>
            <div className={styles.image}>
                <img src={props.image} alt="#"/>
            </div>
            <div className={styles.description}>
                <div className={styles.date}>{getDate()}</div>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.text}>{props.text}</div>
                <div className={styles.likeWrapper}>
                    <button className={styles.opinionButton} onClick={(e) => handleLikePost(e)}>
                        <img src={likeLight} alt="likeButton"/>
                        <div>{props.likesCount}</div>
                    </button>
                    <button className={styles.opinionButton} onClick={(e) => handleDislikePost(e)}>
                        <img src={dislikeLight} alt="dislikeButton"/>
                        <div>{props.dislikesCount}</div>
                    </button>
                    <button className={styles.button} onClick={(e) => handleButtonMoreClick(e)}>Подробнее</button>
                    <button className={styles.addPost} onClick={(e) => handleAddPostToSaved(e)}>
                        <img src={addPostIcon} alt="plusImg"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PostMD;