import React from 'react';
import PageTemplate from '../PageTemplate/PageTemplate';


const Failed = () => {
  return (
    <PageTemplate linkName='Back to home' title='Failed'>
      <div>
        <p>Failed!!!</p>
        <button type='button'>Go to home</button>
      </div>
    </PageTemplate>
  )
}

export default Failed;
