import React from 'react';
import './App.css';
import Posts from "./components/Posts/Posts";


export interface IPost {
    id: number;
    image: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    description: string;
    author: number;
}

function App() {

    const PostsData: IPost[] = [
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
            id: 3,
            image: "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed.jpeg",
            text: "Hello!",
            date: "2021-10-07",
            lesson_num: 23,
            title: "B-52!",
            description: "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
            author: 97
        },
        {
            id: 4,
            image: "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed_5c5gF9H.jpeg",
            text: "Hi",
            date: "2021-10-07",
            lesson_num: 22,
            title: "b-52",
            description: "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
            author: 97
        },
        {
            id: 5,
            image: "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed_MQSTowL.jpeg",
            text: "Test",
            date: "2021-10-07",
            lesson_num: 59,
            title: "b-52",
            description: "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
            author: 97
        },
        {
            id: 6,
            image: "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-10-07_%D0%B2_10.12.21.png",
            text: "Hello",
            date: "2021-10-07",
            lesson_num: 44,
            title: "b-52",
            description: "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
            author: 99
        },
        {
            id: 7,
            image: "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed_Akeb3ob.jpeg",
            text: "Hello2",
            date: "2021-10-07",
            lesson_num: 441,
            title: "b-52!!",
            description: "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
            author: 99
        },
        {
            id: 8,
            image: "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-10-08_%D0%B2_11.32.46.png",
            text: "На чиле",
            date: "2021-10-08",
            lesson_num: 100,
            title: "b-52!!",
            description: "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
            author: 122
        },
        {
            id: 9,
            image: "https://tms-studapi-dev.s3.amazonaws.com/media/a1.JPG",
            text: "Blablablalba",
            date: "2021-10-08",
            lesson_num: 49,
            title: "BLABLABLA",
            description: "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
            author: 123
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
    <div className="container">
      <Posts PostsData={PostsData}/>
    </div>
  );
}

export default App;
