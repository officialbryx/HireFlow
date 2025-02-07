import api from './api'; // Import the centralized Axios instance

// Function to fetch users
export const getUsers = async () => {
  try {
    const response = await api.get('/users'); // '/users' is appended to baseURL
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Add more user-related API functions as needed
