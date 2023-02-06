import React from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { showModal } from "../../redux/slices/showModalSlice";
import styles from "./Modal.module.css"


const Modal = () => {

  const modal = useAppSelector((store) => store.modal.value)

  const dispatch = useAppDispatch()

  const handleButtonClick = () =>  {
    dispatch(showModal())
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <div onClick={handleButtonClick} className={styles.btn}>x</div>
      </div>
    </div>
  )
}

export default Modal