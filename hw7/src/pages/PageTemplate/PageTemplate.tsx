import Copyright from '../../components/Copyright/Copyright'
import Menu from '../../components/Menu/Menu'
import ValidationSuccess from '../../components/ValidationSuccess/ValidationSuccess'
import styles from './PageTemplate.module.css'


const PageTemplate = ({ children }: {children: React.ReactNode}) => {
    return (
        <div className={styles.container}>
            <Menu />
            <Copyright />
        </div>
    )
}


export default PageTemplate