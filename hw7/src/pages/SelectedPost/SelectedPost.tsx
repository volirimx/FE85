import React, { useEffect, useState } from 'react';
import styles from './SelectedPost.module.scss'
import { IPostsProps } from '../../types';
import PageTemplate from '../PageTemplate/PageTemplate';
import Pagination from '../../components/Pagination/Pagination'

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
    if(post.prev <= 0) {
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

  const getCurrentPost = () => {
    return post.curr
  }

  const getPreviousPost = () => {
    return post.prev
  }

  const getNextPost = () => {
    return post.next
  }

  if (getCurrentPost()>=0) {
    const index = getCurrentPost()
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
            prev: getPreviousPost() - 1,
            curr: getPreviousPost(),
            next: getCurrentPost(),
          })}
          handleClickNext={() => setPost({
            prev: getNextPost(),
            curr: getNextPost(),
            next: getNextPost() + 1,
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
