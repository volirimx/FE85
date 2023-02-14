import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./slices/cardSlice";

import modalReducer from "./slices/modalSlice";





export const store = configureStore(
    {
        reducer:{
            modal: modalReducer,
            card: cardReducer
        },
    }
)



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch