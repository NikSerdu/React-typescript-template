import axios from "axios";

export const getContentType = () => ({
  "Content-Type": "application/json",
});

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: getContentType(),
});
