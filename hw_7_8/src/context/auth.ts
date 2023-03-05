import React, { useContext, useEffect, useRef, useState } from "react"
import { api } from "../api";

export interface JWTPayload {
  access: string;
  refresh: string;
}

type IJWTContext = {
  jwt?: JWTPayload;
  setJWT?: (jwtData: JWTPayload) => void;
}

export const JWTContext = React.createContext<IJWTContext>({});

export const useInitJWT = () => {
  const [jwt, setJWT] = useState<JWTPayload | undefined>(undefined)

  const changeJWT = (jwt: JWTPayload) => {
    setJWT(jwt)
    api.defaults.headers['Authorization'] = `Bearer ${jwt.access}`
  }
  return {
    jwt,
    setJWT: changeJWT
  }
}

export const useJWTContext = () => useContext(JWTContext)

