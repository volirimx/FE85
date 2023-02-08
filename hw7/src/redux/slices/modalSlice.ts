import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";




interface ICounterState {
    value: boolean
    card: {
        image: string
        text: string
    }
}


export const initialState: ICounterState = {
    value: true,
    card: {
        image: '',
        text: ''
    }
}

export const modalSlice = createSlice(
    {
        name: 'modal',
        initialState,
        reducers : {
            openModal: (state: ICounterState, action: PayloadAction<ICounterState>) => {
                state.value = !state.value
                state.card.image = action.payload.card.image
                state.card.text = action.payload.card.text
            },
        }
    }
)


export const { openModal } = modalSlice.actions

const modalReducer = modalSlice.reducer

export default modalReducer