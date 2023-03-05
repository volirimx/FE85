import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import PostForm from '../../components/PostForm/PostForm';
import PageTemplate from '../PageTemplate/PageTemplate';
import Posts from '../../components/Posts/Posts';
import SmallPost from '../../components/SmallPost/SmallPost';
import { getAllPosts } from '../../redux/slices/postSlice';

const MyPosts = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector(store => store.post.posts)

  useEffect(() =>{
    dispatch(getAllPosts())
  },[])
  console.log(selector)
  return (
    <PageTemplate title='My posts'>
      { selector.map(card => <SmallPost key={card.id} id={card.id} image={card.image} date={card.date} title={card.title} />)}
    </PageTemplate>
  )
}

export default MyPosts;

