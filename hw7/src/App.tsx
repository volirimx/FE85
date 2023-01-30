import React, { useState } from 'react';
import './App.css';
import Success from './pages/Success/Success';
import Registration from './pages/Registration/Registration';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FullPost from './pages/FullPost/FullPost';
import AllPosts from './pages/AllPosts/AllPosts';

function App() {
  return (
    <div className="App">
        <div>
            <Header
                firstName=""
                lastName=""
            />
            <Success/>
            <Footer/>
        </div>
        <div>
            <Header
            firstName="user"
            lastName=""
            />
            <Registration/>
            <Footer/>
        </div>
        <div>
            <Header
                firstName="Viya"
                lastName="Silya"
            />
            <FullPost/>
            <Footer/>
        </div>
        <div>
            <Header
                firstName="Viya"
                lastName="Silya"
            />
            <AllPosts/>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
