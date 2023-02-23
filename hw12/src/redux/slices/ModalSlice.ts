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
    previewCard: Card | undefined;
}

const initialState: CardsState = {
    cards: posts,
    previewCard: undefined,
};

export const ModalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<Card>) => {
        state.previewCard = action.payload;
        },
        closeModal: (state) => {
            state.previewCard = undefined;
        },
        showNextCard: (state) => {
            const currentCardIndex = state.cards.findIndex(
                (card) => card.id === state.previewCard?.id
            );
            if (
                currentCardIndex === -1 ||
                currentCardIndex + 1 === state.cards.length
                
            ) {
                return console.log(state.cards.length);
            }
            state.previewCard = state.cards[currentCardIndex + 1];
        },
        showPrevCard: (state) => {
            const currentCardIndex = state.cards.findIndex(
                (card) => card.id === state.previewCard?.id
            );
            if (currentCardIndex === -1 || currentCardIndex === 0) {
                return;
            }
            state.previewCard = state.cards[currentCardIndex - 1];
    },
}
});
    
export const { openModal, showNextCard, showPrevCard, closeModal } = ModalSlice.actions;

const modal = ModalSlice.reducer;
    
export default modal;