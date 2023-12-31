import axios from "axios";
import {
    clearToken
} from "./auth";



const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})


// make interceptior response for unAuthorized responses
axiosSecure.interceptors.response.use(response => response, async (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        await clearToken()
        window.location.replace('/login')
    }
    return Promise.reject(error)
})

export default axiosSecure