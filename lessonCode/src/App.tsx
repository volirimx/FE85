import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cards from "./pages/Cards/Cards";

import { ThemeContext, useInitThemeContext } from "./context/theme";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Modal from "./components/Modal/Modal";

function App() {
  const themeContextValues = useInitThemeContext();

  return (
    <Provider store={store}>
      <div className={"light" ? "AppLight" : "App"}>
        <Header />
        {/* <Login /> */}
        <Modal />
        <Cards />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
