import React, { useState } from 'react';
import './App.css';
import Title from './components/title/title';
import MenuBurger from './components/menuBurger/menuBurger';
import Tabs from './components/tabs/tabs';


const tabs = ['All', 'My Favorite', 'Popular']

function App() {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <div className="App">
            <Title
                title = 'Sign In'
            />
            <MenuBurger
                firstName='Viya'
                lastName='Silyantieva'
            />
            <div className="tabs">{tabs.map((tab, index) => (<Tabs
                title={tab}
                index={index}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                />))}
            </div>
        </div>
    );
}

export default App;
