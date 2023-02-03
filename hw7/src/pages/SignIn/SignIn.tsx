import React, { useState, useRef, useEffect } from 'react';
import styles from './SignIn.module.scss'
import PageTemplate from '../PageTemplate/PageTemplate';
import FormSignIn from '../../components/FormSignIn/FormSignIn'


const SignIn = () => {
  return (
    <PageTemplate linkName='Back to home' title='Sign in'>
      <FormSignIn />
    </PageTemplate>
  )
  }

  export default SignIn;
