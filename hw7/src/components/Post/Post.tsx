
import styles from './Post.module.css'
import { useThemeContext } from '../../context/theme';
import { useAppDispatch } from '../../redux/hooks';
import { changeFavourites } from '../../redux/slices/cardSlice';


interface IPost {
    image: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    description: string;
    author: number;
    id: number
}


const Post = ({ image, text, date, lesson_num, title, description, author, id}: IPost) => {
    const theme = useThemeContext()
    const dispatch = useAppDispatch()
    const handleRemoveFromFavouritesButtonClick = () => {
        dispatch(changeFavourites(id))
    }
    return (
        <div className={theme.theme === 'light' ? styles.container : styles.containerDark}>
            <img src={image} alt="" className={styles.image} />
            <div className={styles.textcontent}>
                <h1>{title}</h1>
                <div>{lesson_num}</div>
                <div>{text}</div>
                <div>{description}</div>
                <div>{`Author: ${author}`}</div>
                <div>{date}</div>
                <button onClick={handleRemoveFromFavouritesButtonClick}>Remove from Favourites</button>
            </div>
        </div>
    )
}


export default Post