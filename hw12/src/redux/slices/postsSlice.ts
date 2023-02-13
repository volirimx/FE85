import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {postsApi} from "../../api/api";

export interface IPost {
    createdAt: string;
    title: string;
    description: string;
    image: string;
    likesCount: number;
    dislikesCount: number;
    id: number;
}

interface IInitialState {
    posts: IPost[];
    postModal: {
        id: number;
        image: string;
        isOpen: boolean;
    },
    postsCount: number;
    selectedPage: number;
    isLoading: boolean;
}

const initialState: IInitialState = {
    posts: [],
    postModal: {
        id: 0,
        image: '',
        isOpen: false
    },
    postsCount: 0,
    selectedPage: 1,
    isLoading: false
}

export const getAllPosts = createAsyncThunk(
    "posts/getAllPosts",
    async (selectedPage: number, thunkAPI) => {
        try {
            const response = await postsApi.getPostsAPI(selectedPage)
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ errorMessage: error.message })
        }
    }
)

export const setPostsCount = createAsyncThunk(
    "posts/setPostsCount",
    async (_, thunkAPI) => {
        try {
            const response = await postsApi.getPostsCountApi();
            return response.data.length;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({errorMessage: error.message })
        }
    }
)

//TODO: 'перенести все данные постов в redux'
export const postsSlice = createSlice({
    name: 'postModal',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload
        },
        setPostModalData: (state, action: PayloadAction<{id: number; image: string}>) => {
          state.postModal = {...state.postModal, id: action.payload.id, image: action.payload.image}
        },
        togglePostModalIsOpen: (state) => {
            state.postModal.isOpen = !state.postModal.isOpen
        },
        toggleIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        likePost: (state, action:PayloadAction<number>) => {
            state.posts = state.posts.map(post => {
                if(post.id === action.payload) {
                    return {...post, likesCount: post.likesCount + 1}
                } else {
                    return post
                }
            })
        },
        dislikePost: (state, action:PayloadAction<number>) => {
            state.posts = state.posts.map(post => {
                if(post.id === action.payload) {
                    return {...post, dislikesCount: post.dislikesCount + 1}
                } else {
                    return post
                }
            })
        },
        nextPost: (state) => {
            const indexOfPost = state.posts.findIndex(post => post.id === state.postModal.id);

            if (indexOfPost + 1 !== state.posts.length) {
                state.postModal = {...state.postModal, id: state.posts[indexOfPost + 1].id, image: state.posts[indexOfPost + 1].image};
            }
        },
        prevPost: (state) => {
            const indexOfPost = state.posts.findIndex(post => post.id === state.postModal.id);

            if (indexOfPost !== 0) {
                state.postModal = {...state.postModal, id: state.posts[indexOfPost - 1].id, image: state.posts[indexOfPost - 1].image};
            }
        },
        setSelectedPage: (state, action: PayloadAction<number>) => {
            state.selectedPage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllPosts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAllPosts.fulfilled, (state,action) => {
            state.posts = action.payload;
            state.isLoading = false;
        });
        builder.addCase(setPostsCount.fulfilled, (state, action: PayloadAction<number>) => {
            state.postsCount = action.payload;
        });
    }
})

export const { setPosts, likePost, dislikePost, setPostModalData, togglePostModalIsOpen, toggleIsLoading, nextPost, prevPost, setSelectedPage } = postsSlice.actions;
const postsReducer = postsSlice.reducer;
export default postsReducer;