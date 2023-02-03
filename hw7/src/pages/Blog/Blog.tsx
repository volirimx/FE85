import React, { useState } from 'react';
import styles from './Blog.module.scss'
import { IPostsProps } from '../../types';
import PageTemplate from '../PageTemplate/PageTemplate';
import Posts from '../../components/Posts/Posts'

interface ICurrPost {
  prev: number;
  curr: number;
  next: number;
}

const Blog = ({ posts }: IPostsProps) => {
  return (
    <PageTemplate title='Blog'>
      <Posts posts={posts}/>
    </PageTemplate>
  )
}

export default Blog;
