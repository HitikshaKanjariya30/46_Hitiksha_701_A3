import axios from 'axios';
import { toast } from 'react-toastify';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if(token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// Only show errors via toast, don't auto logout
instance.interceptors.response.use(
    response => response,
    error => {
        const msg = error.response?.data?.msg || "Something went wrong";
        toast.error(msg);
        return Promise.reject(error);
    }
);

export default instance;
