import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
    posts: IPost[],
    postModal: {
        id: number;
        image: string;
        isOpen: boolean;
    },
    isLoading: boolean
}

const initialState: IInitialState = {
    posts: [],
    postModal: {
        id: 0,
        image: '',
        isOpen: false
    },
    isLoading: false
}

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
        }
    }
})

export const { setPosts, likePost, dislikePost, setPostModalData, togglePostModalIsOpen, toggleIsLoading, nextPost, prevPost } = postsSlice.actions;
const postsReducer = postsSlice.reducer;
export default postsReducer;