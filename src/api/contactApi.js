import axios from "axios";

const contactApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/contact-enquiries`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default contactApi;