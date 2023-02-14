import React from 'react';
import styles from './Search.module.css';
import SearchedPost from "../../components/SearchedPost/SearchedPost";
import Preloader from "../../components/Preloader/Preloader";
import {IPost} from "../../redux/slices/postsSlice";

interface ISearchProps {
    inputValue: string;
    handleChangeInputValue: (value: string) => void;
    handleOnSubmit: (e: any) => void;
    posts: IPost[];
    title: string;
    loading: boolean;
    theme: string | undefined
}

const Search = (props: ISearchProps) => {

    const getPost = () => props.posts.map((post: IPost) => <SearchedPost key={post.id} id={post.id} image={post.image} date={post.createdAt} description={post.description}/>)

    return (
        <div className={props.theme === 'light' ? styles.wrapper : `${styles.wrapper} ${styles.wrapperDark}`}>
            <form className={styles.form} onSubmit={(e) => props.handleOnSubmit(e)}>
                <input className={styles.input} onChange={(e) => props.handleChangeInputValue(e.target.value)} value={props.inputValue} type="text" placeholder={'Найти пост...'} required={true}/>
                <button className={styles.button} type={'submit'}>Найти</button>
            </form>
            {props.title.length ? <div className={styles.searchResultText}>Результат поиска <span>'{props.title}'</span></div> : null}
            <div className={styles.posts}>
                {props.loading ? <Preloader /> : getPost()}
            </div>
        </div>
    )
}
export default Search;