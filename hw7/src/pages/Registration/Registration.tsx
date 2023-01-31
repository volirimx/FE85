import React, { useState, useRef, useEffect } from 'react';
import PageTemplate from '../PageTemplate/PageTemplate';
import FormRegistration from '../../components/FormRegistration/FormRegistration'


const Registration = () => {
  return (
    <PageTemplate linkName='Back to home' title='Sign in'>
      <FormRegistration />
    </PageTemplate>
  )
}

export default Registration;
