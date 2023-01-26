import React from 'react';
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


  return (
    <div className="App">
      {/* <AllPosts posts={posts} /> */}
      {/* <SelectedPost posts={posts} /> */}
      {/* <Login /> */}
      {/* <Signin /> */}
      {/* <Success /> */}
    </div>
  );
}

export default App;
