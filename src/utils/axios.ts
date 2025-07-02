import axios from "axios";

const api = axios.create({
  baseURL: "https://meeting-backend1.vercel.app/api", 
  withCredentials: true, 
});

export default api;
