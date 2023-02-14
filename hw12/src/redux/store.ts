import {configureStore} from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";
import registrationReducer from "./slices/registrationSlice";
import savedReducer from "./slices/savedSlice";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        registration: registrationReducer,
        saved: savedReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;