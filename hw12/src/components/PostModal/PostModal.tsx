import React from 'react';
import styles from './PostModal.module.css';
import closeIcon from '../../assets/images/close.svg'
import {useAppDispatch, useAppSelector} from "../../redux/hook";
import nextArrow from '../../assets/images/nextArrow.svg';
import prevArrow from '../../assets/images/prewArrow.svg';
import {nextPost, prevPost, togglePostModalIsOpen} from "../../redux/slices/postsSlice";

const PostModal = () => {

    console.log('postModal is render')

    const postModal = useAppSelector((state => state.posts.postModal));
    const dispatch = useAppDispatch();

    const handleOnPostClose = () => {
        dispatch(togglePostModalIsOpen())
    }

    const handleNextPost = () => {
        dispatch(nextPost())
    }

    const handlePrevPost = () => {
        dispatch(prevPost())
    }

    return (
        postModal.isOpen ? <div className={styles.bg}>
            <div className={styles.modalWrapper}>
                <button className={styles.closeButton} onClick={handleOnPostClose}>
                    <img src={closeIcon} alt="closeIcon"/>
                </button>
                <div className={styles.image}>
                    <img src={postModal.image} alt="image"/>
                </div>
                <div className={styles.arrows}>
                    <button className={styles.arrow} onClick={handlePrevPost}>
                        <img src={prevArrow} alt="arrow"/>
                    </button>
                    <button className={styles.arrow} onClick={handleNextPost}>
                        <img src={nextArrow} alt="arrow"/>
                    </button>
                </div>
            </div>
        </div> : null
    )
}

export default PostModal;