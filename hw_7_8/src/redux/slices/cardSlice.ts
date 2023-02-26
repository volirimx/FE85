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
  author: number;
  like: number;
  dislike: number
}

export interface CardsState {
  cards: Card[];
  previewCard: Card | undefined;
}

export const getAllPosts = createAsyncThunk (
  "posts/getAllPosts",
  async (card, thunkApi) => {
    console.log(card);
    try {
      const response = await axios.get(
        "https://63e657077eef5b223383d57b.mockapi.io/posts"
      );
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue({ errorMessage: error.message });
    }
  }
);

const initialState: CardsState = {
  cards: [],
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
            likes: card.like + 1,
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
            dislikes: card.dislike + 1,
          };
        }
        return card;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getAllPosts.fulfilled,
      (state, action: { payload: Card[]; type: string }) => {
        state.cards = action.payload;
      }
    );
  },
});

export const {
  openCardPreview,
  closeCardPreview,
  showNextCard,
  showPrevCard,
  likeCard,
  dislikeCard,
} = cardPreviewSlice.actions;

export default cardPreviewSlice.reducer;