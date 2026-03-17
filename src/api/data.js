import { axiosInstance } from './auth';

export const fetchCategories = () => axiosInstance.get('categories');
export const fetchRecentOrders = () => axiosInstance.get('orders/recent'); // Assuming recent orders endpoint
export const fetchAllOrders = () => axiosInstance.get('orders');
export const fetchProducts = (category) => axiosInstance.get(`products${category ? `?category=${category}` : ''}`);
export const fetchUserProfile = () => axiosInstance.get('profile');
export const updateUserProfile = (data) => axiosInstance.put('profile', data);

