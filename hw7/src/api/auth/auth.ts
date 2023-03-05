import { api } from "..";



export const signIn = async (data: {email: string; password: string}) => {
    const response: any = await api.post('auth/jwt/create/', data)
    return response
}