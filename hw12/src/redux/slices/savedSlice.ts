import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ISavedProps {
    title: string;
    description?: string;
    image: string;
    id: number;
}

interface IInitialState {
    posts: ISavedProps[],
}

const initialState: IInitialState = {
    posts: []
}
export const savedSlice = createSlice({
    name: 'saved',
    initialState,
    reducers: {
        addPostToSaved: (state, action: PayloadAction<ISavedProps>) => {
            state.posts.push(action.payload);
        }
    }
})

export const { addPostToSaved } = savedSlice.actions;
const savedReducer = savedSlice.reducer;
export default savedReducer;