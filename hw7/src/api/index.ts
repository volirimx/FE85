import axios from "axios";
import { refreshJWT } from "./auth/auth";


export const api = axios.create({
    baseURL: "https://studapi.teachmeskills.by",
});


const makeRequest = <Params>(callback: Function) => async (params: Params) => {
    try {
        const response = await callback()
        return response
    } catch (err: any) {
        if (err.response.status === 401) {
            await refreshJWT(localStorage.getItem('refreshToken'))
            const response = await callback(params)
            return response
        }
    }
}
