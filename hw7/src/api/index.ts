import axios from "axios";

export const api = axios.create({
  baseURL: "https://studapi.teachmeskills.by",
});

export const mockApi = axios.create({
  baseURL: "https://6402224f3779a86262661a73.mockapi.io",
});
