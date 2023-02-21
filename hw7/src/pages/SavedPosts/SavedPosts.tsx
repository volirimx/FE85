import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import styles from './SavedPosts.module.scss'
import PageTemplate from '../PageTemplate/PageTemplate';
import SmallPost from '../../components/SmallPost/SmallPost';

const SavedPosts = () => {
  const posts = useAppSelector(store => store.card.cards)
  const savedPosts = posts.map(post => (post.saved ? <SmallPost key={post.id} id={post.id} image={post.image} date={post.date} title={post.title} /> : null))

  return (
    <PageTemplate title='SavedPosts'>
        {savedPosts}
    </PageTemplate>
  )
}

export default SavedPosts;