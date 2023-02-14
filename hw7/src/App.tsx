import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post/Post';
import SmallerPost from './components/SmallerPost/SmallerPost';
import SmallestPost from './components/SmallestPost/SmallestPost';
import Menu from './components/Menu/Menu';
import Success from './pages/Success/Success';
import SignIn from './pages/Login/Login';
import PageTemplate from './pages/PageTemplate/PageTemplate';
import Login from './pages/Login/Login';
import Signin from './pages/Signin/Signin';
import AllPosts from './pages/AllPosts/AllPosts';
import SelectedPost from './pages/SelectedPost/SelectedPost';
import Copyright from './components/Copyright/Copyright';
import { ThemeContext, useInitThemeContext } from './context/theme';
import Search from './pages/Search/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthRoot from './components/routes/AuthRoot/AuthRoot';
import Modal from './components/Modal/Modal';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { useAppSelector } from './redux/hooks';
import FavouritePosts from './pages/FavouritePosts/FavouritePosts';
function App() {


  const posts = [
    {
      id: 1,
      image: "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png",
      text: "фыв",
      date: "2021-10-06",
      lesson_num: 123,
      title: "фывфывфыв",
      description: "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
      author: 7
    },
    {
      id: 2,
      image: "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_17.37.38.png",
      text: "Text",
      date: "2021-10-07",
      lesson_num: 48,
      title: "Title",
      description: "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
      author: 7
    },
    {
      id: 10,
      image: "https://tms-studapi-dev.s3.amazonaws.com/media/Niira.jpg",
      text: "my sisters cat",
      date: "2021-10-08",
      lesson_num: 49,
      title: "Cat Niira",
      description: "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
      author: 123
    }
]

  const [searchResult, setSearchResult] = useState('')

  const changeSearch = (input: string) => setSearchResult(input)

  const themeContextValues = useInitThemeContext();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeContext.Provider value={themeContextValues}>
        <div className={themeContextValues.theme === 'light' ? 'container' : 'containerDark'}>
          <Menu changeSearch={changeSearch} />
          <Modal />
          <Routes>
          <Route path='/Posts' >
            <Route index element={<AllPosts />}></Route>
            <Route element={
              <AuthRoot route='/posts' dependency={true}>
                <SelectedPost />
            </AuthRoot>
            } path=':id' /> 
          </Route>
          <Route element={<Login  />} path='/Login' /> 
          <Route element={<Signin  />} path='/Signin' /> 
          <Route element={<Success />} path='/Success' /> 
          <Route element={<Search search={searchResult} posts={posts} />} path='/Search' />
          <Route element={<FavouritePosts/>} path='/Favourites' />
        </Routes>
          <Copyright />
        </div>
        </ThemeContext.Provider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
