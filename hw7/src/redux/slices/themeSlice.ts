
import { createSlice } from "@reduxjs/toolkit"

interface ThemeState {
  value: string
}

const initialState: ThemeState = {
  value: 'light'
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    change: (state) => {
      if(state.value === 'light') state.value = 'dark'
      else state.value = 'light'
    }
  },
})

export const { change } = themeSlice.actions


const themeReducer = themeSlice.reducer
export default themeReducer
