import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counterSlice";
import preview from "./slices/cardPreviewSlice";
import cards from "./slices/cards";
export const store = configureStore({
  reducer: { counter, preview, cards },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
