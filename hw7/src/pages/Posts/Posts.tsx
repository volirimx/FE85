import React from "react";
import {IPost} from "../../App";
import styles from './Posts.module.css';
import PostLG from "../../components/posts/PostLG/PostLG";
import {pageHOC} from "../../HOCs/pageHOC";
import PostMD from "../../components/posts/PostMD/PostMD";
import PostSM from "../../components/posts/PostSM/PostSM";

interface IPostsProps {
    postsData: IPost[]
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

        return <PostLG image={dataByLessons.image} text={dataByLessons.text} date={dataByLessons.date}
                       title={dataByLessons.title} description={dataByLessons.description}/>
    }

    const getPost = (Component: any, data: IPost[]) => {
        return data.map(post => <Component key={post.id} image={post.image} text={post.text} date={post.date}
                                           title={post.title}/>)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.contentPosts}>
                {getPostLG(props.postsData)}
                <div className={styles.postsWrapper}>
                    {getPost(PostMD, props.postsData)}
                </div>
            </div>
            <div className={styles.sidebar}>
                {getPost(PostSM, props.postsData)}
            </div>
        </div>
    )
}

export default pageHOC(Posts);