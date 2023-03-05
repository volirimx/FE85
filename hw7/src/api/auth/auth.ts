import {api} from "../index";

export const signIn = async ( data: {
    email: string;
    password: string;
}) => {
    try {
        const response = await api.post("/auth/jwt/create/", data)
        api.defaults.headers['Authorization'] = response.data.access
        localStorage.setItem("refreshToken", response.data.refresh)
        return response
    } catch (error) {
        console.log(error);

    }
}

export const refreshJWT = async (refresh: string | null) => {

    if(refresh) {
        try {
            const response: any = await api.post("/auth/jwt/create/", { refresh })
            api.defaults.headers['Authorization'] = response.data.access
        } catch (e) {
            console.log(e);

        }
    }
}
