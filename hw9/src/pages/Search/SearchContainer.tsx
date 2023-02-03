import Search from "./Search";
import React, {useState} from "react";
import {postsApi} from "../../api/api";
import {IPost} from "../Posts/PostsContainer";
import {useThemeContext} from "../../context/themeContext";

const SearchContainer = () => {

    const [inputValue, setInputValue] = useState<string>('');
    const [posts, setPosts] = useState<IPost[]>([]);
    const [title, setTitle] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const { theme, changeTheme } = useThemeContext();

    const handleChangeInputValue = (value: string): void => {
        setInputValue(value)
    }

    const handleOnSubmit = (e: any) => {
        e.preventDefault();
        setTitle(inputValue);
        setLoading(true)

        postsApi.findPostsByDescription(inputValue).then(response => {
            if(response.status === 200) {
                setPosts(response.data)
            }
            setLoading(false);
        })

        setInputValue('')
    }

    return <Search inputValue={inputValue} handleChangeInputValue={handleChangeInputValue} handleOnSubmit={handleOnSubmit} posts={posts} title={title} loading={loading} theme={theme}/>
}

export default SearchContainer;