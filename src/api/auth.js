import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/api/`;

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Interceptor to attach token to all requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const register = (data) => axiosInstance.post('register', data);
export const loginUser = (data) => axiosInstance.post('login', data);
