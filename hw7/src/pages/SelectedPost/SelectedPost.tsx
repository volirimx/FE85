import React, { useEffect, useState } from 'react';
import styles from './SelectedPost.module.scss'
import { IPostsProps } from '../../types';
import PageTemplate from '../PageTemplate/PageTemplate';
import Pagination from '../../components/Pagination/Pagination';
import {useParams} from 'react-router-dom'

interface ICurrPost {
  prev: number;
  curr: number;
  next: number;
}

const SelectedPost = ({posts}: IPostsProps) => {
  const [disabled, setDisabled] = useState({
    prev: false,
    next: false
  })
  const [post, setPost] = useState<ICurrPost>({
    prev: -1,
    curr: 0,
    next: 1,
  })

  useEffect(() => {
    if(post.prev <= -1) {
      setDisabled({
        prev: true,
        next: false
      })
    }
    else if (post.next === posts.length) {
      setDisabled({
        prev: false,
        next: true
      })
    }
    else {
      setDisabled({
        prev: false,
        next: false
      })
    }
  }, [post])

  if (post.curr >= 0) {
    const index = post.curr
    return (
      <>
        {(index !== -1 && index < posts.length) ? <PageTemplate linkName='Kroshki' title={posts[index].title}>
          <div className={styles.container}>
            <div className={styles.image}>
              <img src={posts[index].image} alt='Картинка' />
            </div>
            <div className={styles.text}>{posts[index].text}</div>
          </div>
          <Pagination buttonPrevDisabled={disabled.prev} buttonNextDisabled={disabled.next}
          handleClickPrev={() => setPost({
            prev: post.prev - 1,
            curr: post.prev,
            next: post.prev + 1,
          })}
          handleClickNext={() => setPost({
            prev: post.next - 1,
            curr: post.next,
            next: post.next + 1,
          })} />
        </PageTemplate> : null}
      </>
    )
    }
  else {
    return null
  }
}

export default SelectedPost;
