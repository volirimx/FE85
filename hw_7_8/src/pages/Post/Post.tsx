import React, { useState } from "react";
import { SelectedPost } from "../../components/SelectedPost/SelectedPost";
import { IDataProps } from "../../components/types";
import PageTemplate from "../PageTemplate/PageTemplate";

const card =  [
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
  ]



export const Post = ({card} :IDataProps ) => {

  const getId = (event : any)=> {
    const target = event.target

    const newPost = card.map((item) => target.id == item.id ? item.id : 'none')
    console.log(newPost);
    
  }
  

  return (
    <PageTemplate title={"Post"} linkName={"Back to home"}>
      <SelectedPost 
        id={card[0].id} 
        image={card[0].image} 
        text={card[0].text} 
        date={card[0].date} 
        title={card[0].title} 
        description={card[0].description} 
        author={card[0].author} />
    </PageTemplate>
  );
};
