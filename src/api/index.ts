import axios from "axios";

export const API = axios.create({
  baseURL: "https://corpland-cash-backend.onrender.com/api/v1",
  withCredentials: true,
});

export const CORPLAND_BACKEND_API = axios.create({
  baseURL: "https://corpland.api.corplandtechnologies.com/api/v1",
  withCredentials: true,
});

export const CORPLAND_ID_API = axios.create({
  baseURL:
    process.env.REACT_APP_CORPLAND_ID_API_URL ||
    "https://id.api.corplandtechnologies.com/api/v1",
  timeout: 45000,
});
