import axios from "axios";

const axiosConfig = axios.create({
    baseURL: 'https://63d166683f08e4a8ff972476.mockapi.io'
})

interface IPostUserAPIData {
    login: string;
    password: string;
}

export const usersApi = {
    getUsersAPI: () => {
        return axiosConfig.get('/users')
    },
    findUserByLoginAPi: (login: string): any => {
        return axiosConfig.get(`/users?login=${login}`)
    },
    postUserAPI: (data: IPostUserAPIData) => {
        return axiosConfig.post('/users', data)
    }
}

export const postsApi = {
    getPostsAPI: (page: number = 1) => {
        return axiosConfig.get(`/posts?page=${page}&limit=18`)
    },
    getPostsCountApi: () => {
        return axiosConfig.get('/posts')
    },
    getPostById: (id: string | undefined) => {
        return axiosConfig.get(`/posts/${id}`)
    },
    findPostsByDescription: (text: string) => {
        return axiosConfig.get(`/posts?description=${text}`)
    }
}