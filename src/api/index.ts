import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5008/api/v1",
  withCredentials: true,
});
