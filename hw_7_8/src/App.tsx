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

const сardsData: IDataProps = {card: [
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
  }
],

}

function App() {
  const themeContextValues = useInitThemeContext()
  const params = useParams()
  console.log(params);
  
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeContext.Provider value={themeContextValues}>
          <div className="App">
            <Header />
            <div className="body">
    {/* Пример */}
              {/*<Routes>
                <Route path="/posts">
                  <Route element={<Posts />} index />
                  <Route  path=":id" element={
                    <PrivateRoute dependency={true} root={'/posts'}>
                      <Post card={сardsData.card} />
                    </PrivateRoute>
                    } />
                </Route>
              </Routes> */}


    {/* Домашка 7-9 */}
              {/* <Success /> */}
              {/* <Search card={сardsData.card} /> */}
              {/* <Posts />
              <Post card={сardsData.card} /> */}
              {/* <SignUpPage /> */}
              {/* <LoginPage/> */}
            </div>
            <Footer />
          </div>
        </ThemeContext.Provider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
