import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { posts } from "../../utility/posts";


export interface Card {
    id: number;
    image: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    description: string;
    author: number;
    favorite: boolean;
}

export interface CardsState {
    cards: Card[];
}

const initialState: CardsState = {
    cards: posts,
};

export const FavoriteSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        getFavoritePost: (state: CardsState, action: PayloadAction<number>) => {
            state.cards.map((post) => {
                if (post.id === action.payload) {
                    post.favorite = !post.favorite
                }
            })
        },

    }
});
    
export const { getFavoritePost } = FavoriteSlice.actions;

const favorite = FavoriteSlice.reducer;
    
export default favorite;