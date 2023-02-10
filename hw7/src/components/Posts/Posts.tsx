import react from 'react';
import uuid from 'react-uuid';
import styles from './Posts.module.scss';
import { IPostsProps } from '../../types/index'
import LargePost from '../../components/LargePost/LargePost';
import MediumPost from '../../components/MediumPost/MediumPost';
import SmallPost from '../../components/SmallPost/SmallPost';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {increment} from '../../redux/slices/counterSlice'

const Posts = ({ posts }: IPostsProps) => {
  const theme = useAppSelector((store) => store.theme.value)
  const mediumPosts = posts.map(post => ((post.id > 0 && post.id <= 4) ? <MediumPost id={post.id} key={uuid()} image={post.image} date={post.date} title={post.title} /> : null))
  const smallPosts = posts.map(post => ((post.id > 5 && post.id <= posts.length) ? <SmallPost id={post.id}  key={uuid()} image={post.image}  date={post.date} title={post.title}  /> : null))

  return (
    <div className={(theme === 'light' ? styles.postsLight : styles.posts)}>
      <div className={styles.largePost}><LargePost id={posts[0].id} image={posts[0].image} date={posts[0].date} title={posts[0].title} description={posts[0].description}/></div>
      {mediumPosts}
      <div className={styles.smallPosts}>
        {smallPosts}
      </div>
    </div>
  )
};

export default Posts;
