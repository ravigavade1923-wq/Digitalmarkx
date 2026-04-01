import axios from "axios";

const blogApi = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default blogApi;