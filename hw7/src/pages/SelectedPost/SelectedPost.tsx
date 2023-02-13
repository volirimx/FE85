import React from "react";
import { useParams } from "react-router-dom";
import Copyright from "../../components/Copyright/Copyright";
import Menu from "../../components/Menu/Menu";
import Post from "../../components/Post/Post";
import { useAppSelector } from "../../redux/hooks";
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


const SelectedPost = () => {
    const posts = useAppSelector(store => store.card.cards)
    const { id } = useParams()
    const newItem = posts.find((item) => item.id === Number(id))
    if(newItem) {
    return (
        
        <div className={styles.container}>
            
            <Post 
                image={newItem.image}
                text={newItem.text}
                date={newItem.date}
                lesson_num={newItem.lesson_num}
                title={newItem.title}
                description={newItem.description}
                author={newItem.author}
                key={newItem.id}
                id={newItem.id}
            />
        </div>
    )
    }
    else return (
        <div>POST NOT FOUND</div>
    )
}


export default SelectedPost