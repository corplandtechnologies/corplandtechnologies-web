import axios from "axios";

export const API = axios.create({
  baseURL: "https://corpland-cash-backend.onrender.com/api/v1",
  withCredentials: true,
});
