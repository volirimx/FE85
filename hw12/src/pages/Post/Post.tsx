import React from "react";
import styles from './Post.module.css';
import Title from "../../components/Title/Title";
import Preloader from "../../components/Preloader/Preloader";
import {IPost} from "../../redux/slices/postsSlice";

const Post = ({ postData, loading, theme }: { postData: IPost, loading: boolean, theme: string | undefined }) => {

    return <>
        {loading ? <Preloader /> : <>
            <Title title={postData.title}/>
            <div className={theme === 'light' ? styles.post : `${styles.post} ${styles.postDark}`}>
                <div className={styles.image}>
                    <img src={postData.image} alt=""/>
                </div>
                <div className={styles.text}>{postData.description}</div>
            </div>
        </>}
    </>
}

export default Post;