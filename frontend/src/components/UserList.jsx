import { useEffect, useState } from 'react';
import { getUsers } from '../services/users'; // Import the specific API function

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data); // Set the fetched users
      } catch (err) {
        setError('Failed to fetch users. Please try again later.');
      } finally {
        setLoading(false); // Ensure loading is set to false after the request
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">User List</h2>
      <ul className="space-y-4">
        {users.map(user => (
          <li
            key={user.id}
            className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow"
          >
            <span className="text-lg font-semibold text-gray-800">{user.username}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;