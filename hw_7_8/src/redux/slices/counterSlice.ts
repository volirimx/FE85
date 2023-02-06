import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChangeThemeState {
  value: string;
}

const initialState: ChangeThemeState = {
  value: 'light'
}

export const changeThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light';
    },
    }
  },
)

export const { changeTheme } = changeThemeSlice.actions

const changeThemeReducer = changeThemeSlice.reducer

export default changeThemeReducer


// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface CounterState {
//   value: number;
// }

// const initialState: CounterState = {
//   value: 0
// }

// export const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action: PayloadAction<number>) => {
//       state.value += action.payload;
//     },
//   },
// })

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// const counterReducer = counterSlice.reducer

// export default counterReducer