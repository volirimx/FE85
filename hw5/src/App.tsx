import React, { useState } from 'react';
import logo from './logo.svg';
import Title from './components/Title/Title'
import Burger from './components/Burger/Burger'
import Tabs from './components/Tabs/Tabs'
import './App.css';

function App() {
  const [isActive, setActive] = useState(false);
  return (
    <>
    <Title title='Sign in'/>
    <Burger item='Anna Cheshok' isActive={isActive} setActive={setActive}/>
    <Tabs />
    </>
  );
}

export default App;
