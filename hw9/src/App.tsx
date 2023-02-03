import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Confirmed from "./pages/Confirmed/Confirmed";
import RegistrationContainer from "./pages/Registration/RegistrationContainer";
import LoginContainer from "./pages/Login/LoginContainer";
import {Route, Routes} from "react-router-dom";
import {InitThemeContext, ThemeContext} from "./context/themeContext";
import PostsContainer from "./pages/Posts/PostsContainer";
import PostContainer from "./pages/Post/PostContainer";
import SearchContainer from "./pages/Search/SearchContainer";


const userData: string = "Viktor Mankevich";

function App() {

    const theme = InitThemeContext();

    return (
        <ThemeContext.Provider value={theme}>
            <div className={theme.theme === 'light' ? 'App' : 'App Dark'}>
                <Header user={userData}/>
                <div className="wrapper">
                    <div className='content'>
                        <div className="container">
                            <Routes>
                                <Route path='/confirmed' element={<Confirmed/>}/>
                                <Route path='/login' element={<LoginContainer/>}/>
                                <Route path='/registration' element={<RegistrationContainer/>}/>
                                <Route path='/posts' element={<PostsContainer/>}/>
                                <Route path='/post/:postId?' element={<PostContainer />}/>
                                <Route path='/search' element={<SearchContainer />}/>
                            </Routes>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
