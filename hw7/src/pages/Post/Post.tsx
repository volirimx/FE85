import React from "react";
import {pageHOC} from "../../HOCs/pageHOC";
import styles from './Post.module.css';
import {IPost} from "../../App";

const Post = ({ postData }: { postData: IPost }) => {
    return <div className={styles.post}>
        <div className={styles.image}>
            <img src={postData.image} alt=""/>
        </div>
        <div className={styles.text}>{postData.description}</div>
    </div>
}

export default pageHOC(Post);