import React, { useState } from 'react';
import './App.css';
import Title from './components/title/title';
import Burger from './components/burger/burger';
import Tabs from './components/tabs/tabs';

function App() {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState(0)
  return (
    <div className="App">
      <Title />
      <Burger open={open} setOpen={setOpen}/>
      <Tabs tab={tab} setTab={setTab}/>
    </div>
  );
}

export default App;
