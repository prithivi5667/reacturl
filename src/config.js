import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://shortner-urlpt.herokuapp.com"
})  