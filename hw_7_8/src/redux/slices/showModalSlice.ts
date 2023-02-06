import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface showModalState {
  value: boolean;
}

const initialState: showModalState = {
  value: false
}

export const showModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.value = !state.value;
    },
    }
  },
)

export const { showModal } = showModalSlice.actions

const showModaleReducer = showModalSlice.reducer

export default showModaleReducer