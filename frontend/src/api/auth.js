import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const signup = async (data) => {
    return await axios.post(`${API_URL}/auth/signup`, data);
};

export const login = async (data) => {
    return await axios.post(`${API_URL}/auth/login`, data);
};
