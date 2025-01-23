// import axios from 'axios';

// const API_URL = 'http://127.0.0.1:5000/api';  // Adjust URL if needed

// export const getUsers = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/users`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     throw error;
//   }
// };
import axios from 'axios';

// Centralized Axios instance
const api = axios.create({
  baseURL: 'http://localhost:8000', // Replace with your actual API base URL
  timeout: 10000, // Optional: Set a timeout for requests
  headers: {
    'Content-Type': 'application/json',
  },
});

// Export the Axios instance
export default api;
