import React, { useEffect, useState } from 'react';
import styles from './SelPost.module.scss'
import { IPostsProps } from '../../types';
import PageTemplate from '../PageTemplate/PageTemplate';
import SmallPost from '../../components/SmallPost/SmallPost';
import { useParams, useNavigate } from 'react-router-dom'

const SelPost = ({ posts }: IPostsProps) => {
  const params = useParams()

  const post = posts.find(post => !!params.id && post.id === +params.id)

  if (!!post) {
    return (
      <PageTemplate linkName='Kroshki' title={post.title}>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src={post.image} alt='Картинка' />
          </div>
          <div className={styles.text}>{post.description}</div>
        </div>
        </PageTemplate>
      )
    } else return null
}

export default SelPost;
