import React, { useEffect } from 'react';
import './App.css';
import { Cards } from './components/Card/Card';
import { IDataProps } from './components/types';

const сardsData: IDataProps = {card: [
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
    }
  ],

}


function App() {

  return (
    <div className="App">
      <Cards card={сardsData.card}  />
    </div>
  );
}

export default App;
