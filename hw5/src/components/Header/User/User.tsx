import styles from '../Header.module.css'

const User = (props: { username: string; }) => {

    const getLogo = (username: string): string => {
        const array = username.split(' ');
        return array[0][0] + array[1][0]
    }

    return (
        <div className={styles.username}>
            <div className={styles.logo}>{getLogo(props.username)}</div>
            <div className={styles.username}>{props.username}</div>
        </div>
    )
}

export default User;