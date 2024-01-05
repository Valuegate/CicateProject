import axios  from "axios";

const baseURL = "http://localhost:3000/"

export const Client = axios.create({
    baseURL: baseURL,
    timeout: 3000,
    headers: 
    "Content-Type: application/json",
});

axios.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error("Axios response error:", error);
      return Promise.reject(error);
    }
  );





