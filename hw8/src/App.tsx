import React, { useState } from 'react';
import './App.css';
import Success from './pages/Success/Success';
import Login from './pages/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FullPost from './pages/FullPost/FullPost';
import AllPosts from './pages/AllPosts/AllPosts';
import Registration from './pages/Registration/Registration';


const posts = [
    {
        "id": 10,
        "image": "https://tms-studapi-dev.s3.amazonaws.com/media/Niira.jpg",
        "text": "my sisters cat",
        "date": "2021-10-08",
        "lesson_num": 49,
        "title": "Cat Niira",
        "description": "She also has a black muzzle with long white whiskers. Her legs and paws are white. Matilda has big eyes. Her eyes are light green, but they become yellow in bright sunlight. She has got big black ears and a small pink nose.As any other cat Matilda loves sleeping, eating and playing. Her favourite places are an armchair in the living room and a windowsill in my parents’ bedroom. Matilda also likes lying on my desk and especially on the computer keyboard!",
        "author": 123
    },
    {
        "id": 12,
        "image": "https://tms-studapi-dev.s3.amazonaws.com/media/1473613140_zlye-volki.jpeg",
        "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, odio voluptates aut molestiae, corporis consequatur assumenda corrupti quasi vitae architecto perspiciatis deleniti dolorem, reiciendis quidem nulla natus nobis ducimus omnis?",
        "date": "2021-10-10",
        "lesson_num": 12,
        "title": "Woolf",
        "description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
        "author": 133
    },
    {
        "id": 16,
        "image": "https://tms-studapi-dev.s3.amazonaws.com/media/siba.jpg",
        "text": "cute dog",
        "date": "2021-10-10",
        "lesson_num": 49,
        "title": "DOGGE",
        "description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
        "author": 123
    }
]

const title = posts.map(item => item.title);
const date = posts.map(item => item.date);
const image = posts.map(item => item.image);
const description = posts.map(item => item.description);




function App() {
    return (
    <div className="App">
            <Header
                firstName=""
                lastName=""
            />
            {/* <Success/> */}
            {/* <Login/> */}
            <Registration/>
            {/* <FullPost
                title={title[0]}
                description={description[0]} 
                date={date[0]}
                image={image[0]}
            /> 
            <AllPosts/> */}
            <Footer/>
    </div>
    )
}

export default App;