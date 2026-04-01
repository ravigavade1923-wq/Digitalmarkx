
import axios from "axios";

const contactApi = axios.create({
  baseURL: "http://localhost:5000/api/contact-enquiries",
});

export default contactApi;