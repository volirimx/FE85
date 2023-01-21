import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post/Post';
import SmallerPost from './components/SmallerPost/SmallerPost';
import SmallestPost from './components/SmallestPost/SmallestPost';

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
    <div>
    <div className="App">
      <div className='liquid-snake'>
      <Post image={posts[0].image} text={posts[0].text} date={posts[0].date} lesson_num={posts[0].lesson_num} title={posts[0].title} description={posts[0].description} author={posts[0].author}/>
      <SmallerPost image={posts[0].image} text={posts[0].text} date={posts[0].date} lesson_num={posts[0].lesson_num} title={posts[0].title} description={posts[0].description} author={posts[0].author} />
      <SmallestPost image={posts[0].image} text={posts[0].text} date={posts[0].date} lesson_num={posts[0].lesson_num} title={posts[0].title} description={posts[0].description} author={posts[0].author} />
      </div>
    </div>

    <div className='solid-snake'>
      {posts.map((item) => 
      <Post 
      image={item.image} 
      text={item.text}
      date={item.date}
      lesson_num={item.lesson_num} 
      title={item.title}
      description={item.description}
      author={item.author}
      />)}
    </div>
    <div className='solid-snake'>
      {posts.map((item) => 
      <SmallerPost 
      image={item.image} 
      text={item.text}
      date={item.date}
      lesson_num={item.lesson_num} 
      title={item.title}
      description={item.description}
      author={item.author}
      />)}
    </div>
    <div className='solid-snake'>
      {posts.map((item) => 
      <SmallestPost 
      image={item.image} 
      text={item.text}
      date={item.date}
      lesson_num={item.lesson_num} 
      title={item.title}
      description={item.description}
      author={item.author}
      />)}
    </div>    
    </div>
  );
}

export default App;
