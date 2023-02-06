import { configureStore } from "@reduxjs/toolkit";
import changeThemeReducer from "./slices/counterSlice";
import counterReducer from "./slices/counterSlice";
import showModaleReducer from "./slices/showModalSlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: changeThemeReducer,
    modal: showModaleReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch