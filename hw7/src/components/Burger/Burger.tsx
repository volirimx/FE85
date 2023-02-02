import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Burger.module.css'

interface IBurger {
    open: boolean;
    setOpen: (arg: boolean) => void;
}


const Burger = ({open, setOpen}: IBurger) => {

    const navigate = useNavigate()
    const location = useLocation()

    const handleBurgerClick = () => {
        setOpen(!open)
    }
    return (
        <div className={styles.container} onClick={handleBurgerClick}>
            <main className={open ? styles.closedMenu : styles.menuIsOpen}></main>
            <ul className={open ? styles.listContainerClosed : styles.listContainer}>
                <li className={location.pathname === '/Login' ? styles.active : ''} onClick={() => navigate('/Login')}>Login</li>
                <li className={location.pathname === '/Signin' ? styles.active : ''} onClick={() => navigate('/Signin')}>Sign In</li>
                <li className={location.pathname === '/posts' ? styles.active : ''} onClick={() => navigate('/posts')}>All Posts</li>
                <li className={location.pathname === '/Success' ? styles.active : ''} onClick={() => navigate('/Success')}>Success</li>
                <li className={location.pathname === '/Search' ? styles.active : ''} onClick={() => navigate('/Search')}>Search</li>
            </ul>
        </div>
    
    )
}


export default Burger