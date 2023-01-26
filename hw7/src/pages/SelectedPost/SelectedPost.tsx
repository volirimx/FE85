import React from "react";
import Copyright from "../../components/Copyright/Copyright";
import Menu from "../../components/Menu/Menu";
import Post from "../../components/Post/Post";
import styles from './SelectedPost.module.css'
interface IPost {
    id: number
    image: string
    date: string
    lesson_num: number
    title: string
    description: string
    text: string
    author: number
}


interface ISelectedPost {
    posts: IPost[]
}


const SelectedPost = ({ posts }: ISelectedPost) => {
    return (
        <div className={styles.container}>
            <Menu />
            <Post 
                image={posts[0].image}
                text={posts[0].text}
                date={posts[0].date}
                lesson_num={posts[0].lesson_num}
                title={posts[0].title}
                description={posts[0].description}
                author={posts[0].author}
                key={posts[0].id}
            />
            <Copyright />
        </div>
    )
}


export default SelectedPost