import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Success from '../src/pages/Success/Success'
import SignIn from '../src/pages/SignIn/SignIn'
import SelectedPost from '../src/pages/SelectedPost/SelectedPost'
import Blog from '../src/pages/Blog/Blog'
import { IPostsProps } from './types/index'
import './App.css';

const сards: IPostsProps = {
  posts: [
    {
      id: 1,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
      text: "0 Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dignissimos, quo voluptatibus doloremque perspiciatis quas saepe alias? Esse voluptate quasi sapiente architecto consectetur, laborum nesciunt ipsum nemo iusto voluptates illum?",
      date: "2021-10-06",
      lesson_num: 123,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '7'
    },
    {
      id: 2,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125421_11-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-13.jpg",
      text: "1",
      date: "2021-10-06",
      lesson_num: 456,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '8'
    },
    {
      id: 3,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
      text: "2",
      date: "2021-10-06",
      lesson_num: 789,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '9'
    },
    {
      id: 4,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
      text: "3",
      date: "2021-10-06",
      lesson_num: 123,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '7'
    },
    {
      id: 5,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125421_11-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-13.jpg",
      text: "4",
      date: "2021-10-06",
      lesson_num: 456,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '8'
    },
    {
      id: 6,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
      text: "5",
      date: "2021-10-06",
      lesson_num: 789,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '9'
    },
    {
      id: 7,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
      text: "6",
      date: "2021-10-06",
      lesson_num: 123,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '7'
    },
    {
      id: 8,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125421_11-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-13.jpg",
      text: "7",
      date: "2021-10-06",
      lesson_num: 456,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '8'
    },
    {
      id: 9,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
      text: "8",
      date: "2021-10-06",
      lesson_num: 789,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '9'
    },
    {
      id: 10,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125421_11-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-13.jpg",
      text: "9",
      date: "2021-10-06",
      lesson_num: 456,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '8'
    },
    {
      id: 11,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
      text: "10",
      date: "2021-10-06",
      lesson_num: 789,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '9'
    },
  ]
}


function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <SelectedPost posts={сards.posts} />
      {/* <Success />
      <Blog posts={сards.posts} />
      <SignIn />
      */}
      <Footer/>
    </div>
  );
}

export default App;
