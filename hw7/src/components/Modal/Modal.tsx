import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { openModal } from '../../redux/slices/modalSlice'
import { store } from '../../redux/store'
import styles from './Modal.module.css'


const Modal = () => {
    const check = useAppSelector((store) => store.modal.value)
    const image = useAppSelector((store) => store.modal.card.image)
    const text = useAppSelector((store) => store.modal.card.text)
    const dispatch = useAppDispatch()

    const handleCrossClick = () => {
        dispatch(openModal({
            value: false,
            card: {
                image: image,
                text: text
            }
        }))
    }

    if (check) {
    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <img src={image} alt="" />
                <div>{text}</div>
                <button onClick={handleCrossClick} >X</button>
            </div>
        </div>
    )
    } else return null
}


export default Modal