import react from 'react';
import styles from './Posts.module.scss';
import { IPostsProps } from '../../types/index'
import LargePost from '../../components/LargePost/LargePost';
import MediumPost from '../../components/MediumPost/MediumPost';
import SmallPost from '../../components/SmallPost/SmallPost';

const Posts = ({ posts }: IPostsProps) => {
  const mediumPosts = posts.map(post => ((post.id > 0 && post.id <= 4) ? <MediumPost id={post.id} image={post.image} text={post.text} date={post.date} lesson_num={post.lesson_num} title={post.title} description={post.description} author={post.author} /> : null))
  const smallPosts = posts.map(post => ((post.id > 5 && post.id <= posts.length) ? <SmallPost id={post.id} image={post.image} text={post.text} date={post.date} lesson_num={post.lesson_num} title={post.title} description={post.description} author={post.author} /> : null))

  return (
    <div className={styles.posts}>
      <div className={styles.largePost}><LargePost id={posts[0].id} image={posts[0].image} text={posts[0].text} date={posts[0].date} lesson_num={posts[0].lesson_num} title={posts[0].title} description={posts[0].description} author={posts[0].author} /></div>
      {mediumPosts}
      <div className={styles.smallPosts}>
        {smallPosts}
      </div>
    </div>
  )
};

export default Posts;
