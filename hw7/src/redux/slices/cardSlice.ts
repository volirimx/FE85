import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Card {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  description: string;
  author: string;
  saved: boolean;
}

export interface CardsState {
  cards: Card[];
}

const initialState: CardsState = {
  cards: [
    {
      id: 1,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
      text: "0 Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dignissimos, quo voluptatibus doloremque perspiciatis quas saepe alias? Esse voluptate quasi sapiente architecto consectetur, laborum nesciunt ipsum nemo iusto voluptates illum?",
      date: "2021-10-06",
      lesson_num: 123,
      title: "first post",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '7',
      saved: false
    },
    {
      id: 2,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125421_11-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-13.jpg",
      text: "1",
      date: "2021-10-06",
      lesson_num: 456,
      title: "second post",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '8',
      saved: false
    },
    {
      id: 3,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
      text: "2",
      date: "2021-10-06",
      lesson_num: 789,
      title: "third post",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '9',
      saved: false
    },
    {
      id: 4,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
      text: "3",
      date: "2021-10-06",
      lesson_num: 123,
      title: "fourth post",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '7',
      saved: false
    },
    {
      id: 5,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125421_11-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-13.jpg",
      text: "4",
      date: "2021-10-06",
      lesson_num: 456,
      title: "fifth.post",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '8',
      saved: false
    },
    {
      id: 6,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
      text: "5",
      date: "2021-10-06",
      lesson_num: 789,
      title: "sixth post",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '9',
      saved: false
    },
    {
      id: 7,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
      text: "6",
      date: "2021-10-06",
      lesson_num: 123,
      title: "seventh post",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '7',
      saved: false
    },
    {
      id: 8,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125421_11-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-13.jpg",
      text: "7",
      date: "2021-10-06",
      lesson_num: 456,
      title: "eightth post",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '8',
      saved: false
    },
    {
      id: 9,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
      text: "8",
      date: "2021-10-06",
      lesson_num: 789,
      title: "nineth post",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '9',
      saved: false
    },
    {
      id: 10,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125421_11-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-13.jpg",
      text: "9",
      date: "2021-10-06",
      lesson_num: 456,
      title: "tenth post",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '8',
      saved: false
    },
    {
      id: 11,
      image: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649125512_27-vsegda-pomnim-com-p-krasivie-vidi-prirodi-foto-33.jpg",
      text: "10",
      date: "2021-10-06",
      lesson_num: 789,
      title: "eleventh post",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus nulla quas voluptatibus iure non, exercitationem in rerum voluptatem eveniet.",
      author: '9',
      saved: false
    },
  ]
};

export const cardSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    save: (state, action: PayloadAction<number>) => {
      const postIndex = state.cards.findIndex(p => p.id === action.payload)
      state.cards[postIndex].saved = !state.cards[postIndex].saved
    }
    // like: (state, action: PayloadAction<number>) => {
    //   const postIndex = state.cards.findIndex(p => p.id === action.payload)
    //   state.cards[postIndex].likes++
    // },
    // disLike: (state, action: PayloadAction<number>) => {
    //   const postIndex = state.cards.findIndex(p => p.id === action.payload)
    //   state.cards[postIndex].disLikes--
    // },
  },
});

export const { save } = cardSlice.actions


const cardReducer = cardSlice.reducer
export default cardReducer
