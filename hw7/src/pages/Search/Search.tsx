import React from "react";
import Post from "../../components/Post/Post";
import SmallerPost from "../../components/SmallerPost/SmallerPost";
import { IPost } from "../AllPosts/AllPosts";
interface ISearch {
    search: string
    posts: IPost[]
}



const Search = ( {search, posts}: ISearch )  => {
    const newPosts = posts.filter((item) => item.title.toUpperCase().includes(search.toUpperCase()))
    return (
        <div>
            {newPosts.map((item) => <Post 
            image={item.image} 
            text={item.text}
            date={item.date}
            lesson_num={item.lesson_num}
            title={item.title}
            description={item.description}
            author={item.author}
            />)}
        </div>
    )
}


export default Search