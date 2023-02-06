import React, { useState} from 'react';
import uuid from 'react-uuid';
import styles from './SearchPost.module.scss'
import { IPostsProps } from '../../types/index'
import PageTemplate from '../PageTemplate/PageTemplate';
import SmallPost from '../../components/SmallPost/SmallPost';

const SearchPost = ({posts}: IPostsProps) => {

  const [searchPost, setSearchPost] = useState('')

  const handleChangeInput = (event: any) => {
    const target = event.target
    setSearchPost(target.value)
  }

  const filteredPosts = posts.filter(post => {
    return post.title.toLowerCase().includes(searchPost.toLowerCase())
  })

  return (
    <PageTemplate linkName='Back to home' title='Search Post'>
      <input className={styles.search} name='search' placeholder='Input title of post' onChange={handleChangeInput}/>
      {filteredPosts.map(post => <SmallPost id={post.id} key={uuid()} date={post.date} title={post.title} image={post.image}/>)}
    </PageTemplate>
  )
}

export default SearchPost;
