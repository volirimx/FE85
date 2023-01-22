import styles from './Posts.module.css'
import {IPost} from "../../App";
import PostLG from "./Post/PostLG/PostLG";
import PostMD from "./Post/PostMD/PostMD";
import PostSM from "./Post/PostSM/PostSM";
import React from "react";

interface IPostsProps {
    PostsData: IPost[]
}

export interface IPostProps {
    image: string;
    text: string;
    date: string;
    title: string;
    description?: string;
}

const Posts = (props: IPostsProps) => {

    // Возвращает карточку с максимальным кол-вом уроков
    const getPostLG = (data: IPost[]) => {
        const dataByLessons = data.reduce((prev, cur) => prev.lesson_num > cur.lesson_num ? prev : cur)

        return <PostLG  image={dataByLessons.image} text={dataByLessons.text} date={dataByLessons.date} title={dataByLessons.title} description={dataByLessons.description}/>
    }

    const getPost = (Component:any, data: IPost[]) => {
        return data.map(post => <Component image={post.image} text={post.text} date={post.date} title={post.title} />)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.contentPosts}>
                {getPostLG(props.PostsData)}
                <div className={styles.postsWrapper}>
                    {getPost(PostMD, props.PostsData)}
                </div>
            </div>
            <div className={styles.sidebar}>
                {getPost(PostSM, props.PostsData)}
            </div>
        </div>
    )
}

export default Posts;