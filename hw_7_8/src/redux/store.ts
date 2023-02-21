import { configureStore } from "@reduxjs/toolkit";
import changeThemeReducer from "./slices/counterSlice";
import counterReducer from "./slices/counterSlice";
import cardPreview from "./slices/cardPreviewSlice";
import cards from "./slices/cardSlice"
import user from "./slices/userSlice"


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: changeThemeReducer,
    cardPreview,
    cards,
    user
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch