import styles from './PostMD.module.css'
import {IPostProps} from "../../Posts";

const PostMD = (props: IPostProps) => {
    return <>
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <img src={props.image} alt="#"/>
            </div>
            <div className={styles.text}>
                <div className={styles.text__date}>{props.date}</div>
                <div className={styles.text__title}>{props.text}</div>
            </div>
        </div>
    </>
}

export default PostMD;