import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cards from "./pages/Cards/Cards";

import { ThemeContext, useInitThemeContext } from "./context/theme";
import { Provider } from "react-redux";
import { store } from "./redux/store";

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
    <Provider store={store}>
      <ThemeContext.Provider value={themeContextValues}>
        <div className={"light" ? "AppLight" : "App"}>
          <Header />
          {/* <Login /> */}
          <Cards />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
