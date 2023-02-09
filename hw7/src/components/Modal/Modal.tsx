import react, {useState, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import SmallPost from '../SmallPost/SmallPost';
import Blog from '../../pages/Blog/Blog';
import styles from './Modal.module.scss';
import { isOpenedModal, showPost } from '../../redux/slices/modalSlice';
import Pagination from '../../components/Pagination/Pagination'
import { IPostsProps } from '../../types';


interface ICurrPost {
  prev: number;
  curr: number;
  next: number;
}

const Modal = ({ posts }: IPostsProps) => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector(s => s.modal)

  const postIndex = posts.findIndex(post => post.id === selector.value.post.id)

  const [disabled, setDisabled] = useState({
    prev: false,
    next: false
  })
  const [post, setPost] = useState<ICurrPost>({
    prev: postIndex -1,
    curr: postIndex,
    next: postIndex + 1,
  })

  useEffect(() => {
    if (post.prev <= -1) {
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

  const handleButtonClick = () => {
    dispatch(isOpenedModal())
  }

  const handleClickNextButton = () => {
    setPost({
      prev: post.next - 1,
      curr: post.next,
      next: post.next + 1,
    })
    dispatch(showPost(posts[post.curr]))
  }

  const handleClickPrevButton = () => {
    setPost({
      prev: post.prev - 1,
      curr: post.prev,
      next: post.prev + 1,
    })
    dispatch(showPost(posts[post.curr]))
  }

  return (
    <>
      <div className={styles.container + ' ' + (!selector.value.isOpened ? styles.modalClose : '')}>
        <div className={styles.post}>
          <button className={styles.button} onClick={handleButtonClick}>X</button>
          <img className={styles.image} src={selector.value.post.image} alt='Картинка' />
          <div className={styles.title}>{selector.value.post.title}</div>
          <Pagination buttonPrevDisabled={disabled.prev} buttonNextDisabled={disabled.next}
            handleClickPrev={handleClickPrevButton}
            handleClickNext={handleClickNextButton} />
        </div>
      </div>
    </>
  )
};

export default Modal

