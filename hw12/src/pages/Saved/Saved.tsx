import React from 'react';
import styles from './Saved.module.css';
import Title from "../../components/Title/Title";
import {useAppSelector} from "../../redux/hook";
import PostLG from "../../components/posts/PostLG/PostLG";

const Saved = () => {

    const savedPosts = useAppSelector((state) => state.saved.posts);

    const getSavedPosts = () => savedPosts.map(post => <PostLG title={post.title} image={post.image} id={post.id} key={post.id} description={post.description} />)

    return (
        <div className={styles.wrapper}>
            <Title title={'Мои посты'} />
            <div className={styles.saved}>
                {savedPosts.length ? getSavedPosts() : <div>Пока сохраненных постов нет!</div>}
            </div>
        </div>
    )
}

export default Saved;