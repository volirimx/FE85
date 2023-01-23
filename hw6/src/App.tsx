import React from 'react';
import logo from './logo.svg';
import { IPostsProps } from './types/index'
import Posts from './components/Posts/Posts'
import './App.css';

const сards: IPostsProps = {posts: [
  {
    id: 1,
    image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
    text: "фыв",
    date: "2021-10-06",
    lesson_num: 123,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
    author: '7'
  },
  {
    id: 2,
    image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125421_11-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-13.jpg",
    text: "фыв",
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
    lesson_num: 123,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
    author: '7'
  },
  {
    id: 5,
    image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125421_11-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-13.jpg",
    text: "фыв",
    date: "2021-10-06",
    lesson_num: 456,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
    author: '8'
  },
  {
    id: 6,
    image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
    text: "фыв",
    date: "2021-10-06",
    lesson_num: 789,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
    author: '9'
  },
  {
    id: 7,
    image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
    text: "фыв",
    date: "2021-10-06",
    lesson_num: 123,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
    author: '7'
  },
  {
    id: 8,
    image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125421_11-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-13.jpg",
    text: "фыв",
    date: "2021-10-06",
    lesson_num: 456,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
    author: '8'
  },
  {
    id: 9,
    image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
    text: "фыв",
    date: "2021-10-06",
    lesson_num: 789,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
    author: '9'
  },
  {
    id: 10,
    image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125421_11-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-13.jpg",
    text: "фыв",
    date: "2021-10-06",
    lesson_num: 456,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
    author: '8'
  },
  {
    id: 11,
    image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
    text: "фыв",
    date: "2021-10-06",
    lesson_num: 789,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
    author: '9'
  },
]}

function App() {
  return (
    <div className='wrapper'>
      <Posts posts={сards.posts}/>
    </div>
  );
}


export default App;
