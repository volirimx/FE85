
import styles from './Post.module.css'


interface IPost {
    image: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    description: string;
    author: number;
}


const Post = ({ image, text, date, lesson_num, title, description, author}: IPost) => {
    return (
        <div className={styles.container}>
            <div className={styles.textcontent}>
                <h1>{title}</h1>
                <div>{lesson_num}</div>
                <div>{text}</div>
                <div>{description}</div>
                <div>{`Author: ${author}`}</div>
                <div>{date}</div>
            </div>
            <img src={image} alt="" className={styles.image} />
        </div>
    )
}


export default Post