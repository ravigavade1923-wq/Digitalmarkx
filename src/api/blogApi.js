import axios from "axios";

const RAW_API_URL =
  import.meta.env.VITE_API_URL || "https://blogadmin-0fj9.onrender.com/api";

const API_BASE_URL = RAW_API_URL.replace(/\/$/, "");

const blogApi = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export default blogApi;