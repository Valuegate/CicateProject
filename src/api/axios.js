import axios  from "axios";

const baseURL = "localhost:3000"

export const Client = axios.create({
    baseURL: baseURL,
    timeout: 3000,
     
});







