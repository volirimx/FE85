import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ThemeContext, useInitThemeContext } from './context/theme';
import { Success } from './pages/Success/Success';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { Posts } from './pages/Posts/Posts';
import { Post } from './pages/Post/Post';
import { IDataProps } from './components/types';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Modal from './components/Modal/Modal';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import Search from './pages/Search/Search';
import { JWTContext, useInitJWT } from './context/auth';
import ActivatePage from './pages/ActivatePage/ActivatePage';
import { Unsuccess } from './pages/Unsuccess/Unsuccess';
import { MyFavorite } from './pages/MyFavorite/MyFavorite';

export const сardsData: IDataProps = {card: [
  {
    id: 1,
    image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
    text: "фыв впп",
    date: "2021-10-06",
    lesson_num: 123,
    title: "aaa Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
    author: '7'
  },
  {
    id: 2,
    image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125421_11-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-13.jpg",
    text: "фыв дло",
    date: "2021-10-06",
    lesson_num: 456,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
    author: '8'
  },
  {
    id: 3,
    image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
    text: "фыв",
    date: "2021-10-06",
    lesson_num: 789,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
    author: '9'
  },
  {
    id: 4,
    image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
    text: "фыв",
    date: "2021-10-06",
    lesson_num: 789,
    title: "ewg Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
    author: '9'
  },
  {
    id: 5,
    image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125421_11-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-13.jpg",
    text: "фыв дло",
    date: "2021-10-06",
    lesson_num: 456,
    title: "ewtwg Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
    author: '8'
  },
  {
    id: 6,
    image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125421_11-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-13.jpg",
    text: "фыв дло",
    date: "2021-10-06",
    lesson_num: 456,
    title: "dsf Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
    author: '8'
  }
],
}



function App() {
  const themeContextValues = useInitThemeContext()
  const params = useParams()
  const valuesForJWT = useInitJWT()
  
  
  return (
    <Provider store={store}>
      <JWTContext.Provider value={valuesForJWT}>
      <BrowserRouter>
        <ThemeContext.Provider value={themeContextValues}>
          <div className="App">
            <Header />
            <div className="body">
              <Routes>
                <Route path='/Posts' >
                  <Route index element={<Posts />}></Route>
                  <Route element={
                    <PrivateRoute root='/posts' dependency={true}>
                      <Post card={сardsData.card} />
                    </PrivateRoute>
                    } path=':id' /> 
                  </Route>
                  <Route element={<LoginPage  />} path='/Login' /> 
                  <Route path="/activate/:uid/:token" element={<ActivatePage/>}/>
                  <Route element={<SignUpPage  />} path='/Signup' /> 
                  <Route element={<Success />} path='/Success' /> 
                  <Route element={<Unsuccess />} path='/Unsuccess' /> 
                  <Route element={<Search card={сardsData.card} /> } path='/Search' /> 
                  <Route element={<MyFavorite /> } path='/MyFavorite' /> 
              </Routes>

              {/* <Success /> */}
              {/* <Search card={сardsData.card} /> */}
              {/* <Posts /> */}
              {/* <Post card={сardsData.card} /> */}
              {/* <SignUpPage /> */}
              {/* <LoginPage/> */}
            
            </div>
            <Footer />
            <Modal />
          </div>
        </ThemeContext.Provider>
      </BrowserRouter>
      </JWTContext.Provider>
    </Provider>
  );
}

export default App;
