import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Modal from './components/Modal/Modal'
import Success from '../src/pages/Success/Success'
import SignIn from '../src/pages/SignIn/SignIn'
import Registration from '../src/pages/Registration/Registration'
import SearchPost from '../src/pages/SearchPost/SearchPost'
import SelectedPost from '../src/pages/SelectedPost/SelectedPost'
import SelPost from '../src/pages/SelPost/SelPost'
import Blog from '../src/pages/Blog/Blog'
import SavedPosts from '../src/pages/SavedPosts/SavedPosts'
import ActivatedPage from '../src/pages/ActivatedPage/ActivatedPage'
import { IPostsProps } from './types/index'
import { ThemeContext, useInitThemeContext } from "./context/theme"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {store} from './redux/store'
import './App.css'
import { Provider } from 'react-redux';
import { useAppSelector } from './redux/hooks';
import AddPost from './pages/AddPost/AddPost';
import MyPosts from './pages/MyPosts/MyPosts';

const сards: IPostsProps = {
  posts: [
    {
      id: 1,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
      text: "0 Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dignissimos, quo voluptatibus doloremque perspiciatis quas saepe alias? Esse voluptate quasi sapiente architecto consectetur, laborum nesciunt ipsum nemo iusto voluptates illum?",
      date: "2021-10-06",
      lesson_num: 123,
      title: "first post",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '7'
    },
    {
      id: 2,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125421_11-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-13.jpg",
      text: "1",
      date: "2021-10-06",
      lesson_num: 456,
      title: "second post",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '8'
    },
    {
      id: 3,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
      text: "2",
      date: "2021-10-06",
      lesson_num: 789,
      title: "third post",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '9'
    },
    {
      id: 4,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
      text: "3",
      date: "2021-10-06",
      lesson_num: 123,
      title: "fourth post",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '7'
    },
    {
      id: 5,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125421_11-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-13.jpg",
      text: "4",
      date: "2021-10-06",
      lesson_num: 456,
      title: "fifth.post",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '8'
    },
    {
      id: 6,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
      text: "5",
      date: "2021-10-06",
      lesson_num: 789,
      title: "sixth post",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '9'
    },
    {
      id: 7,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
      text: "6",
      date: "2021-10-06",
      lesson_num: 123,
      title: "seventh post",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '7'
    },
    {
      id: 8,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125421_11-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-13.jpg",
      text: "7",
      date: "2021-10-06",
      lesson_num: 456,
      title: "eightth post",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '8'
    },
    {
      id: 9,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
      text: "8",
      date: "2021-10-06",
      lesson_num: 789,
      title: "nineth post",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '9'
    },
    {
      id: 10,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125421_11-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-13.jpg",
      text: "9",
      date: "2021-10-06",
      lesson_num: 456,
      title: "tenth post",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '8'
    },
    {
      id: 11,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
      text: "10",
      date: "2021-10-06",
      lesson_num: 789,
      title: "eleventh post",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '9'
    },
  ]
}

const arrID = сards.posts.map(post => post.id)


function App() {
  const themeContextValues = useInitThemeContext()

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeContext.Provider value={themeContextValues}>
          <div className={themeContextValues.theme == 'light' ? "wrapperLight" : "wrapper"}>
            <Header />
            <Routes>
              {/* <Route index element={<Blog posts={сards.posts} />} />
                {<Route path=':id' element={<SelPost posts={сards.posts} />} />}
                <Route path=':id' element={
                  <PrivateRoute dependency={true} route={'/posts'}><SelPost posts={сards.posts} /></PrivateRoute>} />
              </Route> */}
              <Route path='/blog' >
                <Route index element={<Blog posts={сards.posts}/>}/>
                <Route path=':id' element={<SelPost posts={сards.posts} />} />
              </Route>
              <Route path='/registration' element={<Registration/>}/>
              <Route path='/signIn' element={<SignIn />} />
              <Route path='/success' element={<Success />} />
              <Route path='/searchPost' element={<SearchPost posts={сards.posts}/>} />
              <Route path='/savedPosts'>
                <Route index element={<SavedPosts/>} />
                <Route path=':id' element={<SelPost posts={сards.posts} />} />
              </Route>
              <Route path='/addPost' element={<AddPost />} />
              <Route path='/myPosts' element={<MyPosts />} />
              <Route path='/activate/:uid/:token' element={<ActivatedPage />} />
            </Routes>
            <Modal posts={сards.posts} />
            <Footer />
          </div>
        </ThemeContext.Provider>
      </BrowserRouter >
    </Provider>

  );
}

export default App;
