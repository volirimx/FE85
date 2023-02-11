import React, { useEffect } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cards from "./pages/Cards/Cards";

import { ThemeContext, useInitThemeContext } from "./context/theme";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Modal from "./components/Modal/Modal";
import { useAppDispatch } from "./redux/hooks";
import { getAllPosts } from "./redux/slices/cards";
import axios from "axios";
import Login from "./pages/Login/Login";

function App() {
  const themeContextValues = useInitThemeContext();
  // useEffect(() => {
  //   axios.post("https://studapi.teachmeskills.by/auth/users/", {
  //     username: "vollys",
  //     email: "vollys@example.com",
  //     password: "123123Den",
  //   });
  // }, []);

  return (
    <Provider store={store}>
      <div className={"light" ? "AppLight" : "App"}>
        <Header />
        <Login />
        <Modal />
        {/* <Cards /> */}
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
