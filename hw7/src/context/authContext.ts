import { link } from "fs";
import React, { useContext, useState } from "react";
import {api} from '../api/index'

export interface JWTPayload {
    access?: string;
    refresh?: string;
}

type IJWTContext = {
    JWT?: JWTPayload;
    setJWT?: (jwtData: JWTPayload ) => void;
}

export const JWTContext = React.createContext<IJWTContext>({})


export const useInitJWT = () => {
    const [JWT, setJWT] = useState<JWTPayload | undefined>(undefined)

    const changeJWT = (JWT: JWTPayload) => {
        setJWT(JWT)
        api.defaults.headers['Authorization'] = `Bearer ${JWT.access}`
    } 
    return {
        JWT,
        setJWT: changeJWT,
    }
}


export const useJWTContext = () => useContext(JWTContext)