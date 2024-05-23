import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}login/`, credentials);
        return response.data;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await axios.post(`${API_URL}logout/`);
        return response.data;
    } catch (error) {
        console.error('Logout failed:', error);
        throw error;
    }
};

