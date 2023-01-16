import React from 'react';
import './App.css';
import Title from './components/title/title';
import MenuBurger from './components/menuBurger/menuBurger';
import Tabs from './components/tabs/tabs';




function App() {
    return (
        <div className="App">
            <Title
                title = 'Sign In'
            />
            <MenuBurger
                firstName='Viya'
                lastName='Silyantieva'
            />
            <Tabs
                tab1='All'
                tab2='My favorite'
                tab3='Popular'
            />
        </div>
    );
}

export default App;
