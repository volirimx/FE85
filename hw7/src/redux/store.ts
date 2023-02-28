import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/themeSlice'
import modalReducer from './slices/modalSlice'
import cardReducer from "./slices/cardSlice";
import userReducer from "./slices/userSlice";
import postReducer from "./slices/postSlice";


export const store = configureStore({
  reducer: {
    theme: themeReducer,
    modal: modalReducer,
    card: cardReducer,
    user: userReducer,
    post: postReducer
  }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
