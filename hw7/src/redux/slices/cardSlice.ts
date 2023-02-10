import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Card {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  description: string;
  author: number;
  likes: number;
  disLikes: number;
}

export interface CardsState {
  cards: Card[];
}

const initialState: CardsState = {
  cards: [
    {
      id: 1,
      image:
        "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png",
      text: "фыв",
      date: "2021-10-06",
      lesson_num: 123,
      title: "фывфывфыв",
      description:
        "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
      author: 7,
      likes: 0,
      disLikes: 0,
    },
    {
      id: 2,
      image:
        "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_17.37.38.png",
      text: "Text",
      date: "2021-10-07",
      lesson_num: 48,
      title: "Title",
      description:
        "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
      author: 7,
      likes: 0,
      disLikes: 0,
    },
    {
      id: 10,
      image: "https://tms-studapi-dev.s3.amazonaws.com/media/Niira.jpg",
      text: "my sisters cat",
      date: "2021-10-08",
      lesson_num: 49,
      title: "Cat Niira",
      description:
        "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
      author: 123,
      likes: 0,
      disLikes: 0,
    },
  ],
};

export const cardPreviewSlice = createSlice({
  name: "cardPreview",
  initialState,
  reducers: {
    like: (state, action: PayloadAction<number>) => {
      const postIndex = state.cards.findIndex(p => p.id === action.payload)
      state.cards[postIndex].likes++
    },
    disLike: (state, action: PayloadAction<number>) => {
      const postIndex = state.cards.findIndex(p => p.id === action.payload)
      state.cards[postIndex].disLikes--
    },
  },
});

export const { like, disLike } = cardPreviewSlice.actions


const cardReducer = cardPreviewSlice.reducer
export default cardReducer
