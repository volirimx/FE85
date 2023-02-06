import React, { useEffect, useState } from 'react';
import styles from './SelectedPost.module.scss'
import { IPostsProps } from '../../types';
import PageTemplate from '../PageTemplate/PageTemplate';
import SmallPost from '../../components/SmallPost/SmallPost';
import { useParams } from 'react-router-dom'



const SelPost = ({posts}: IPostsProps) => {
  const params = useParams()
  console.log(params.id)
  const post = posts.find(post => !!params.id && post.id === +params.id)
    if (!!post) {
      return (
        <SmallPost id={post.id} image={post.image} title={post.title} date={post.date}/>
      )
    } else return null
}

export default SelPost;
