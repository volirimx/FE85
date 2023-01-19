import React, { useState } from 'react';
import './App.css';
import Title from './components/title/title';
import Burger from './components/burger/burger';
import Tabs from './components/tabs/tabs';
import CustomTitle from './components/title/title';

function App() {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState(0)
  const titleContent: string = 'Sign In'

  const tabs = [
    {
      id: 1,
      content: 'All',
      disabled: false
    },
    {
      id: 2,
      content: 'My Favourites',
      disabled: false
    },
    {
      id: 3,
      content: 'Popular',
      disabled: false
    },
  ]

  return (
    <div className="App">
      <CustomTitle titleContent={titleContent} />
      <Burger open={open} setOpen={setOpen}/>
      <Tabs item={tabs} tab={tab} setTab={setTab} />
    </div>
  );
}

export default App;
