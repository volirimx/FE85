import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


export interface UserToSend {
  username: string;
  email: string;
  password: string;
}

const initialState = {
  username: '',
  id: '',
  email: ''
};

export const registerUser = createAsyncThunk(
  "user/register",
  async (userToSend: UserToSend, thunkApi) => {
    try {
      const response = await axios.post(
        "https://studapi.teachmeskills.by/auth/users/", userToSend
      )
      return response.data
    } catch (e: any) {
      return thunkApi.rejectWithValue({ errorMessage: e.message })
    }
  }
)


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.email = action.payload.email
      state.id = action.payload.id
      state.username = action.payload.username
    })
  }
});

export const { } = userSlice.actions;
const userReducer = userSlice.reducer

export default userReducer;