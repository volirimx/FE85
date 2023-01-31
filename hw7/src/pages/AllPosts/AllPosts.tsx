
import React from "react"
import Copyright from "../../components/Copyright/Copyright"
import Menu from "../../components/Menu/Menu"
import SmallerPost from "../../components/SmallerPost/SmallerPost"
import SmallestPost from "../../components/SmallestPost/SmallestPost"
import styles from './AllPosts.module.css'


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


interface IAllPosts {
    posts: IPost[]
}

const AllPosts = ({ posts }: IAllPosts) => {
    return (
        <div className={styles.container}>
            <div className={styles.posts}>
                <div>
                    {posts.map((item) => <SmallerPost 
                        image={item.image}
                        text={item.text}
                        date={item.date}
                        lesson_num={item.lesson_num}
                        title={item.title}
                        description={item.description}
                        author={item.author}
                        key={item.id}
                />)}</div>
                <div>
                    {posts.map((item) => <SmallestPost 
                        image={item.image}
                        text={item.text}
                        date={item.date}
                        lesson_num={item.lesson_num}
                        title={item.title}
                        description={item.description}
                        author={item.author}
                        key={item.id}
                />)}
                </div>
            </div>
        </div>
    )
}


export default AllPosts