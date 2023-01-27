import React, { useState } from 'react';
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

  const [post, setPost] = useState<ICurrPost>({
    prev: 0,
    curr: 1,
    next: 2,
  })

  const getCurrentPost = () => {
    return post.curr
  }

  const getPreviousPost = () => {
    return post.prev
  }

  const getNextPost = () => {
    return post.next
  }

  if (!!getCurrentPost()) {
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
          <Pagination
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
