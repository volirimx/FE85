import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../api";

export interface IPost {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  description?: string;
  author?: string;
}

interface IInitialState {
  posts: IPost[]
}

const initialState: IInitialState = {
  posts: []
}

export const getAllPosts = createAsyncThunk(
  "posts/getAllPosts",
  async (_, thunkApi) => {
    try {
      const response = await api.get(
        "/blog/posts/my_posts/"
      );
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue({ errorMessage: error.message });
    }
  }
);

export const setPost = createAsyncThunk(
  "posts/setPost",
  async (post: IPost, thunkApi) => {
    console.log(post)
    try {
      const response = await api.post(
        "/blog/posts/", {
        post
      }
      );
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue({ errorMessage: error.message });
    }
  }
);

export const postsSlice = createSlice({
  name: "blog/posts/my_posts",
  initialState,
  reducers: {
  },
  extraReducers:
    (builder) => {
      builder.addCase(getAllPosts.fulfilled, (state, action) => {
        console.log('sdfsf')
        state.posts = action.payload
      })
    }
})

export const { } = postsSlice.actions


const postReducer = postsSlice.reducer
export default postReducer
