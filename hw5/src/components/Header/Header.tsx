import {useState} from "react";
import styles from './Header.module.css';
import hamburgerIcon from '../../images/hamburgermenu.svg'
import crossIcon from '../../images/cross.svg';
import User from "./User/User";

const Header = () => {

    interface IUser {
        id: number;
        username: string
    }

    interface IState {
        isVisible: boolean;
        users: IUser[]
    }

    const [state, setState] = useState<IState>({
        users: [
            {
                id: 1,
                username: 'Viktor Mankevich'
            },
            {
                id: 2,
                username: 'Huba Buba'
            },
            {
                id: 3,
                username: 'Sasha Gray'
            },
            {
                id: 4,
                username: 'Robert Paulson'
            },
        ],
        isVisible: false
    })

    const getUsers = (users: IUser[]) => users.map(user => <User username={user.username} key={user.id}/>)

    return (
        <header className={styles.header}>
            <button className={styles.button} onClick={() => setState({...state, isVisible: !state.isVisible})}>
                <img src={state.isVisible ? crossIcon : hamburgerIcon} alt='#'/>
            </button>
            {state.isVisible ? <div className={styles.dropdown}>{getUsers(state.users)}</div> : null}
        </header>
    )
}

export default Header;