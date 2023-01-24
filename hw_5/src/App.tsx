import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title/Title';
import Menu from './components/Menu/Menu';
import Tab from './components/Tab/Tab';

function App() {

  const [isActive, setActive] = useState(false);
  const [tab, setTab] = useState(0)

  const handleClick = () => {
    setActive(!isActive);
  }

  const tabs = [
    {
      id: 0,
      title: 'All',
      IsDisabled: false
    },
    {
      id: 1,
      title: 'My favorites',
      IsDisabled: false
    },
    {
      id: 2,
      title: 'Popular',
      IsDisabled: true
    }
  ]

  return (
    <div className="App">
      <Menu isActive={isActive} handleButtonClick={handleClick}/>
      <Title title="Sign In"/>
      <Tab item={tabs} tab={tab} setTab={setTab} />
    </div>
  );
}

export default App;
