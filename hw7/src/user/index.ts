import { api } from "../api/index";

export const user = async () => {
    const response = await api.get("/auth/users/me/")
    return response
}