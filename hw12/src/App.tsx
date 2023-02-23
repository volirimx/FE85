import React, { useState, useContext } from 'react';
import './App.css';
import Success from './pages/Success/Success';
import Login from './pages/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FullPost from './pages/FullPost/FullPost';
import AllPosts from './pages/AllPosts/AllPosts';
import Registration from './pages/Registration/Registration';
import Search from './pages/Search/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Modal from './components/Modal/Modal';
import { useAppDispatch } from "./redux/hooks";
import { posts } from './utility/posts';
import FavoriteCard from './pages/FavoriteCard/FavoriteCard';



const title = posts.map(item => item.title);
const date = posts.map(item => item.date);
const image = posts.map(item => item.image);
const description = posts.map(item => item.description);

type ThemeContext = {
    theme?: string;
    changeThemeFunc?: () => void;
};


export const ThemeContext = React.createContext<ThemeContext>({})



function App() {

    const [theme, setTheme] = useState("light")
    const changeThemeFunc= () => {
        setTheme((curr) => curr === "light" ? "dark" : "light");
    }

    const value = {
        theme, 
        changeThemeFunc
    }



    return (
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeContext.Provider value={value}>
                        <div className="App" id={value.theme}>
                            <Header
                                firstName=""
                                lastName=""
                            />
                            <Routes>
                                <Route path="/favorite" element={<FavoriteCard/>}/>
                                <Route path="/" element={<Login/>}/>
                                <Route path="/registration" element={<Registration/>}/>
                                <Route path="/posts">
                                    <Route index element={<AllPosts/>}/>
                                    <Route path=":id" element={
                                        <PrivateRoute route="/posts" dependency={true}>
                                            <FullPost/>
                                        </PrivateRoute>
                                    }/>
                                </Route>
                                <Route path="/search">
                                    <Route index element={<Search/>}/>
                                    <Route path=":id" element={
                                        <PrivateRoute route="/posts" dependency={true}>
                                            <FullPost/>
                                        </PrivateRoute>
                                    }/>
                                </Route>
                                <Route path="/success" element={<Success/>}/>
                            </Routes>
                            </div>
                            <Footer/>
                            <Modal/>
                    </ThemeContext.Provider>
                </BrowserRouter>
            </Provider>
    )
}

export default App;
