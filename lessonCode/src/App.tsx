import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styles from "./Styles.module.css";
import { ClassComp } from "./components/ClassExample/ClassExample";
import { arrayBuffer } from "stream/consumers";
import FuncComp from "./components/FuncComp/FuncComp";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageTemplate from "./pages/PageTemplate/PageTemplate";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
