import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  username: "s",
  id: "",
  email: "",
};

interface UserToSend {
  email: string;
  password: string;
  username: string;
}

export const registerUser = createAsyncThunk(
  "user/register",
  async (userToSend: UserToSend, thunkApi) => {
    try {
      const registerResponse = await axios.post(
        "https://studapi.teachmeskills.by/auth/users/",
        userToSend
      );
      return registerResponse.data;
    } catch (e: any) {
      return thunkApi.rejectWithValue({ errorMessage: e.message });
    }
  }
);

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.username = action.payload.username;
    });
  },
});

export const {} = userSlice.actions;

const user = userSlice.reducer;

export default user;
