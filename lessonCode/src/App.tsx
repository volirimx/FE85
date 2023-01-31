import React, { useEffect, useRef, useState } from "react";
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
import { ThemeContext, useInitThemeContext } from "./context/theme";

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
  const themeContextValues = useInitThemeContext();

  return (
    <ThemeContext.Provider value={themeContextValues}>
      <div className={"light" ? "AppLight" : "App"}>
        <Header />
        {/* <Login /> */}
        <button>Change theme</button>
        <Cards />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
