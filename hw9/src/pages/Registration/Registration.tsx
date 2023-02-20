import React from "react";
import styles from "./Registration.module.css";
import FormRegistration from "../../components/FormRegistration/FormRegistration";
import Title from "../../components/Title/Title";
import ButtonBack from "../../components/ButtonBack/ButtonBack";


const Registration = () => {
    return (
        <div>
            <div className={styles.container}>
                <ButtonBack/>
                <Title
                    title="Registration"
                />
            </div>
            <div>
                <FormRegistration/>
            </div>
        </div>
    )
}

export default Registration;