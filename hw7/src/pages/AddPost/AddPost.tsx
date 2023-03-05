import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import PostForm from '../../components/PostForm/PostForm';
import PageTemplate from '../PageTemplate/PageTemplate';

const AddPost = () => {
  return (
    <PageTemplate title='Add post'>
      <PostForm />
    </PageTemplate>
  )
}

export default AddPost;

