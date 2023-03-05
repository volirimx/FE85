import { api } from "..";


interface IData {
    title: string
    text: string
    lesson_num: number
    image: string
    description: string
}


export const sendPost = async (data: IData) => {
    const response: any = await api.post('/blog/posts/', data)
    return response
}