import react from "react";
import styles from "./Login.module.css";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import Title from "../../components/Title/Title";
import Form from "../../components/Form/Form";



const Login = () => {
    return (
        <div>
            <div>
                <div className={styles.container}>
                    <Title
                        title="Sign In"
                    />
                </div>
                <div>
                    <Form/>
                </div>
            </div>
        </div>
    )
}

export default Login;