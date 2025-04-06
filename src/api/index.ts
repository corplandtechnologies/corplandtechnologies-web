import axios from "axios";

export const API = axios.create({
  baseURL: "https://corpland-cash-backend.onrender.com/api/v1",
  withCredentials: true,
});

export const CORPLAND_BACKEND_API = axios.create({
  baseURL: "https://corpland-backend-v2-backup.onrender.com/api/v1",
  withCredentials: true,
});
