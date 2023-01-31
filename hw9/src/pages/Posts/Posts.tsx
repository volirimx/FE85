import React from "react";
import styles from './Posts.module.css';
import PostMD from "../../components/posts/PostMD/PostMD";
import Title from "../../components/Title/Title";
import {IPost} from "./PostsContainer";
import Preloader from "../../components/Preloader/Preloader";

interface IPostsProps {
    posts: IPost[];
    loading: boolean;
    handleOnPageClick: (page: number) => void;
    postsCount: number;
}

export interface IPostProps {
    id: number
    image: string;
    text: string;
    date: string;
    title: string;
    description?: string;
}

const Posts = ({ posts, loading, handleOnPageClick, postsCount }: IPostsProps) => {

    console.log('render')

    const getPosts = (): any =>  posts.map((post: IPost) => <PostMD id={post.id} key={post.id} image={post.image} text={post.description} date={post.createdAt} title={post.title } />);

    const getPages = (): any => {
        let arr = [];
        let pages = Math.round(postsCount/18)
        for(let i = 1; i <= pages; i++) {
            arr.push(i)
        };
        return arr.map((page: number) => <button key={page} onClick={() => handleOnPageClick(page)} className={styles.pageButton}>{page}</button>)
    }

    return <>
        {loading ? <Preloader />: <>
            <Title title={'Посты'}/>
            <div className={styles.wrapper}>
                {getPosts()}
            </div>
            <div className={styles.pages}>
                {getPages()}
            </div></>}
    </>
}

export default Posts;