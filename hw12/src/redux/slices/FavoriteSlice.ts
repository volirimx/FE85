import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


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
    cards: [
        {
            "id": 1,
            "image": "https://tms-studapi-dev.s3.amazonaws.com/media/Niira.jpg",
            "text": "my sisters cat",
            "date": "2021-10-08",
            "lesson_num": 49,
            "title": "Cat Niira",
            "description": "She also has a black muzzle with long white whiskers. Her legs and paws are white. Matilda has big eyes. Her eyes are light green, but they become yellow in bright sunlight. She has got big black ears and a small pink nose.As any other cat Matilda loves sleeping, eating and playing. Her favourite places are an armchair in the living room and a windowsill in my parents’ bedroom. Matilda also likes lying on my desk and especially on the computer keyboard!",
            "author": 123,
            "favorite": false
        },
        {
            "id": 2,
            "image": "https://tms-studapi-dev.s3.amazonaws.com/media/1473613140_zlye-volki.jpeg",
            "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, odio voluptates aut molestiae, corporis consequatur assumenda corrupti quasi vitae architecto perspiciatis deleniti dolorem, reiciendis quidem nulla natus nobis ducimus omnis?",
            "date": "2021-10-10",
            "lesson_num": 12,
            "title": "Woolf",
            "description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
            "author": 133,
            "favorite": false
        },
        {
            "id": 3,
            "image": "https://tms-studapi-dev.s3.amazonaws.com/media/siba.jpg",
            "text": "cute dog",
            "date": "2021-10-10",
            "lesson_num": 49,
            "title": "DOGGE",
            "description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
            "author": 123,
            "favorite": false
        }
    ]
};

export const FavoriteSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        getFavoritePost: (state, action: PayloadAction<number>) => {
            state.cards.map((post) => {
                if (post.id === action.payload) {
                    post.favorite = !post.favorite;
                }
            })
        },
    }
});
    
export const { getFavoritePost } = FavoriteSlice.actions;

const favorite = FavoriteSlice.reducer;
    
export default favorite;