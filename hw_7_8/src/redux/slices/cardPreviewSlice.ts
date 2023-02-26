import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cardPreviewState {
  value: boolean
    card: {
        image: string
    }
}

const initialState: cardPreviewState = {
  value: false,
  card: {
      image: '',
  }
}

export const cardPreviewSlice = createSlice({
  name: "cardPreview",
  initialState,
  reducers: {
    toggleImage: (state: cardPreviewState, action: PayloadAction<cardPreviewState>) => {
      state.value = !state.value
      state.card.image = action.payload.card.image
    },
  }
})

export const { toggleImage } = cardPreviewSlice.actions

const showModaleReducer = cardPreviewSlice.reducer

export default showModaleReducer