import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {usersApi} from "../../api/api";

interface IInitialState {
    userEmail: string;
    isAuthModal: boolean;
}

const initialState: IInitialState = {
    userEmail: '',
    isAuthModal: false
}

export const authUserThunk = createAsyncThunk(
    "registration/authUser",
    async ({login, password}: {login: string, password: string}, thunkAPI) => {
        try {
            const response = await usersApi.findUserByLoginAPi(login);
            if(!response.data.length) {
                const userResponse = await usersApi.postUserAPI({
                    login: login,
                    password: password
                })
                alert('Регистрация прошла успешно!');
                return userResponse.data;
            } else {
                alert('Такой пользователь уже существует!')
            }
        } catch (error: any) {
            return thunkAPI.rejectWithValue({errorMessage: error.message})
        }
    }
)

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        toggleIsAuthModal: (state) => {
            state.isAuthModal = !state.isAuthModal
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authUserThunk.fulfilled, (state, action) => {
            state.userEmail = action.payload.login;
        })
    }
})

export const {} = registrationSlice.actions;
const registrationReducer = registrationSlice.reducer;
export default registrationReducer;