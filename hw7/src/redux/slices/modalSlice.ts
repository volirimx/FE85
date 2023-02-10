
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {IPostProps} from '../../types/index'

interface ModalState {
  value: {
    post: IPostProps;
    isOpened: boolean;
  }
}

const initialState: ModalState = {
  value: {
    post: {
      id: 0,
      date: '',
      title: '',
      description: '',
      image: '',
    },
    isOpened: false,
  }
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showPost: (state, action: PayloadAction<IPostProps>) => {
      state.value = {
        post: {
          id: action.payload.id,
          date: action.payload.date,
          title: action.payload.title,
          description: action.payload.description,
          image: action.payload.image
        },
        isOpened: true
      }
    },

    isOpenedModal: (state) => {
      state.value = {
        ...state.value,
        isOpened: false
      }
    }
  },
})

export const { showPost, isOpenedModal } = modalSlice.actions


const modalReducer = modalSlice.reducer
export default modalReducer
