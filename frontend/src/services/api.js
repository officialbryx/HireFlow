import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api';  // Adjust URL if needed

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
