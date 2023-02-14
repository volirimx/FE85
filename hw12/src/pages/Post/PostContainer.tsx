import Post from "./Post";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {postsApi} from "../../api/api";
import {useThemeContext} from "../../context/themeContext";
import {IPost} from "../../redux/slices/postsSlice";

const PostContainer = () => {

    const { postId } = useParams();
    const [postData, setPostData] = useState<IPost>({
        createdAt: '',
        title: '',
        description: '',
        image: '',
        likesCount: 0,
        dislikesCount: 0,
        id: 0
    })
    const [loading, setLoading] = useState<boolean>(true);
    const { theme, changeTheme } = useThemeContext();

    useEffect(() => {
        postsApi.getPostById(postId).then(response => {
            if (response.status === 200) {
                setPostData(response.data)
            }
            setLoading(false)
        })
    }, [])

    return <Post postData={postData} loading={loading} theme={theme}/>
}

export default PostContainer;