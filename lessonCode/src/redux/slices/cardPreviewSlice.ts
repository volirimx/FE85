import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  image: string;
}

const initialState: CounterState = {
  image: "",
};

export const cardsSlice = createSlice({
  name: "cardPreview",
  initialState,
  reducers: {
    toggleImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
  },
});

export const { toggleImage } = cardsSlice.actions;

export default cardsSlice.reducer;
