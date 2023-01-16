import React from 'react';
import './App.css';
import MyTitle from "./components/Title/MyTitle";
import Header from "./components/Header/Header";
import Tabs from "./components/Tabs/Tabs";

function App() {
  return (
      <div className="App">
          <Header/>
          <MyTitle/>
          <Tabs />
      </div>
  );
}

export default App;
