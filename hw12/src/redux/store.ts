import { configureStore } from "@reduxjs/toolkit";
import modal from "./slices/ModalSlice";
import favorite from "./slices/FavoriteSlice";


export const store = configureStore({
    reducer: { modal, favorite },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;