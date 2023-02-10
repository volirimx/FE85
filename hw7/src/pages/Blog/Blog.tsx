import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './Blog.module.scss'
import { IPostsProps } from '../../types';
import PageTemplate from '../PageTemplate/PageTemplate';
import Posts from '../../components/Posts/Posts'
import cardSlice from '../../redux/slices/cardSlice'
import SmallPost from '../../components/SmallPost/SmallPost';

const Blog = ({ posts }: IPostsProps) => {
  return (
    <PageTemplate title='Blog'>
      <Posts posts={posts}/>
      {/* {selector.cards.map(card => <SmallPost id={card.id} image={card.image} date={card.date} title={card.title} />)} */}
    </PageTemplate>
  )
}

export default Blog;
