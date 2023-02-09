import Posts from "./Posts";
import {useEffect, useState} from "react";
import {postsApi} from "../../api/api";
import {useAppDispatch, useAppSelector} from "../../redux/hook";
import {setPosts, toggleIsLoading} from "../../redux/slices/postsSlice";



const PostsContainer = () => {

    const posts = useAppSelector((state) => state.posts.posts);
    const postsIsLoading = useAppSelector((state) => state.posts.isLoading);
    const dispatch = useAppDispatch();
    const [page, setPage] = useState<number>(1);
    const [postsCount, setPostsCount] = useState<number>(1);

    useEffect(() => {
        dispatch(toggleIsLoading(true))
        postsApi.getPostsAPI(page).then(response => {
            if(response.status === 200) {
                dispatch(setPosts(response.data))
                // setPosts(response.data)
            }
            dispatch(toggleIsLoading(false))
        })
        postsApi.getPostsCountApi().then(response => {
            if(response.status === 200) {
                setPostsCount(response.data.length)
            }
        })
    }, [page])

    const handleOnPageClick = (page: number): void => {
        setPage(page)
    }

    return <Posts loading={postsIsLoading} posts={posts} handleOnPageClick={handleOnPageClick} postsCount={postsCount} />
}

export default PostsContainer;