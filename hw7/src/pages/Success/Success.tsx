import React from "react";
import styles from "./Success.module.css";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import Title from "../../components/Title/Title";
import Message from "../../components/Message/Message";


const Success = () => {
    return (
        <div>
            <div className={styles.content}>
                <div className={styles.container}>
                    <ButtonBack/>
                    <Title
                        title="Success"
                    />
                    <Message
                        text="Email saved"
                        message="Your registration was successful"
                        button="Go to home"
                    />
                </div>
            </div>
        </div>
    )
};

export default Success;