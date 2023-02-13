import Posts from "./Posts";
import {useEffect, useState} from "react";
import {postsApi} from "../../api/api";
import {useAppDispatch, useAppSelector} from "../../redux/hook";
import {getAllPosts, setPosts, setPostsCount, setSelectedPage, toggleIsLoading} from "../../redux/slices/postsSlice";



const PostsContainer = () => {

    const posts = useAppSelector((state) => state.posts.posts);
    const postsCount = useAppSelector(state => state.posts.postsCount)
    const postsIsLoading = useAppSelector((state) => state.posts.isLoading);
    const selectedPage = useAppSelector(state => state.posts.selectedPage);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllPosts(selectedPage));
        dispatch(setPostsCount());
    }, [selectedPage]);

    const handleOnPageClick = (page: number): void => {
        dispatch(setSelectedPage(page))
    };

    return <Posts loading={postsIsLoading} posts={posts} handleOnPageClick={handleOnPageClick} postsCount={postsCount} />
}

export default PostsContainer;