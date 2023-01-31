import Posts from "./Posts";
import {useEffect, useState} from "react";
import {postsApi} from "../../api/api";

export interface IPost {
    createdAt: string;
    title: string;
    description: string;
    image: string;
    id: number;
}

const PostsContainer = () => {

    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [postsCount, setPostsCount] = useState<number>(1);

    useEffect(() => {
        setLoading(true)
        postsApi.getPostsAPI(page).then(response => {
            if(response.status === 200) {
                setPosts(response.data)
            }
            setLoading(false)
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

    return <Posts loading={loading} posts={posts} handleOnPageClick={handleOnPageClick} postsCount={postsCount} />
}

export default PostsContainer;