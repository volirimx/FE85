import { api } from ".."
import { JWTPayload } from "../../context/auth";


export const signIn = async (loginForm: { email: string; password: string; }) => {
  /*тип кривой здесь - any*/ 
  const response: any = await api.post("/auth/jwt/create/", loginForm)
  return response
}