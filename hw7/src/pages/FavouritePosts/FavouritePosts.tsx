import Post from "../../components/Post/Post"
import { useAppSelector } from "../../redux/hooks"





const FavouritePosts = () => {
    const posts = useAppSelector(store => store.card.cards)
    return (
        <>
            {posts.filter(item => item.inFavourites).map(item => <Post
            image={item.image}
            text={item.text}
            date={item.date}
            lesson_num={item.lesson_num}
            title={item.title}
            description={item.description}
            author={item.author}
            id={item.id}
            />)}
        </>
    )
}



export default FavouritePosts