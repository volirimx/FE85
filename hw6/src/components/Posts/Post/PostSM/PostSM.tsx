import styles from "./PostSM.module.css";
import {IPostProps} from "../../Posts";

const PostSM = (props: IPostProps) => {
    return <>
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <div className={styles.text__date}>{props.date}</div>
                <div className={styles.text__title}>{props.text}</div>
            </div>
            <div className={styles.image}>
                <img src={props.image} alt="#"/>
            </div>
        </div>
    </>
}

export default PostSM;