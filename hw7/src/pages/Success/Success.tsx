import React from 'react';
import styles from './Success.module.scss'
import PageTemplate from '../PageTemplate/PageTemplate';


const Success = () => {
  return (
    <PageTemplate linkName='Back to home' title='Success'>
      <div className={styles.container}>
        <p>Email confirmed</p>
        <p>Your registration is now completed</p>
        <button type='button' className={styles.buttonGoToHome}>Go to home</button>
      </div>
    </PageTemplate>
  )
}

export default Success;
