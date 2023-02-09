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
  dislikes: number;
  rated: 0 | 1 | 2;
}

export interface CardsState {
  cards: Card[];
  previewCard: Card | undefined;
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
      dislikes: 0,
      rated: 0,
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
      dislikes: 0,
      rated: 0,
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
      dislikes: 0,
      rated: 0,
    },
  ],
  previewCard: undefined,
};

export const cardPreviewSlice = createSlice({
  name: "cardPreview",
  initialState,
  reducers: {
    openCardPreview: (state, action: PayloadAction<Card>) => {
      state.previewCard = action.payload;
    },
    closeCardPreview: (state) => {
      state.previewCard = undefined;
    },
    showNextCard: (state) => {
      const currentCardIndex = state.cards.findIndex(
        (card) => card.id === state.previewCard?.id
      );
      if (
        currentCardIndex === -1 ||
        currentCardIndex + 1 === state.cards.length
      ) {
        return;
      }
      state.previewCard = state.cards[currentCardIndex + 1];
    },
    showPrevCard: (state) => {
      const currentCardIndex = state.cards.findIndex(
        (card) => card.id === state.previewCard?.id
      );
      if (currentCardIndex === -1 || currentCardIndex === 0) {
        return;
      }
      state.previewCard = state.cards[currentCardIndex - 1];
    },
    likeCard: (state, action: PayloadAction<number>) => {
      state.cards = state.cards.map((card) => {
        if (card.id === action.payload) {
          return {
            ...card,
            likes: card.likes + 1,
          };
        }
        return card;
      });
    },
    dislikeCard: (state, action: PayloadAction<number>) => {
      state.cards = state.cards.map((card) => {
        if (card.id === action.payload) {
          return {
            ...card,
            dislikes: card.dislikes + 1,
          };
        }
        return card;
      });
    },
    toggleRating: (
      state,
      action: PayloadAction<{ id: number; rating: 0 | 1 | 2 }>
    ) => {
      state.cards = state.cards.map((card) => {
        if (card.id === action.payload.id) {
          if (card.rated === action.payload.rating) {
            return {
              ...card,
              rated: 0,
            };
          }
          return {
            ...card,
            rated: action.payload.rating,
          };
        }
        return card;
      });
    },
  },
});

export const {
  openCardPreview,
  closeCardPreview,
  showNextCard,
  showPrevCard,
  likeCard,
  dislikeCard,
  toggleRating,
} = cardPreviewSlice.actions;

export default cardPreviewSlice.reducer;
