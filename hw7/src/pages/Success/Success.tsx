import Copyright from '../../components/Copyright/Copyright'
import Menu from '../../components/Menu/Menu'
import ValidationSuccess from '../../components/ValidationSuccess/ValidationSuccess'
import styles from './Success.module.css'


const Success = () => {
    const result = 'Success'
    return (
        <div className={styles.container}>
            <ValidationSuccess result={result} />
        </div>
    )
}


export default Success