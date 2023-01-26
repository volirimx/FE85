import React, { useEffect, useState } from "react";
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
import Cards from "./pages/Cards/Cards";

import axios from "axios";

interface ICharacter {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
}

function App() {
  // const changeNum = () => {
  //   setNum((num) => {
  //     console.log(num);

  //     return num + 1;
  //   });
  // };

  // useEffect(() => {
  //   setNum(num + 1);
  //   setNum(num + 1);
  //   setNum(num + 1);
  //   setNum(num + 1);
  // }, []);
  // console.log(num);

  // useEffect(() => {
  //   setNum((num) => num + 1);
  //   setNum((num) => num + 1);
  //   setNum((num) => num + 1);
  //   setNum((num) => num + 1);
  // }, []);

  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
