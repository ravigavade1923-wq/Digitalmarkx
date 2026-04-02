import axios from "axios";

const contactApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/contact-enquiries`,
  withCredentials: true,
});

export default contactApi;