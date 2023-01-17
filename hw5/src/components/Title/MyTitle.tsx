import styles from './Title.module.css';

interface IName {
    name: string
}

const MyTitle = (props: IName) => {
    return <button className={styles.title}>{props.name}</button>
}

export default MyTitle;