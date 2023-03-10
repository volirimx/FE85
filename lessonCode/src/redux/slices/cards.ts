import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

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

export const getAllPosts = createAsyncThunk<Card[], number>(
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
  toggleRating,
} = cardPreviewSlice.actions;

export default cardPreviewSlice.reducer;
