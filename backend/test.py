import unittest
import requests

BASE_URL = 'http://localhost:5000'

class TestFlaskAPI(unittest.TestCase):
    def setUp(self):
        """
        Set up the test environment.
        Register a test user before running each test.
        """
        self.test_user = {
            "username": "test_user",
            "email": "test@example.com",
            "password": "testpassword"
        }

        # Register the test user
        response = requests.post(
            f'{BASE_URL}/register',
            json=self.test_user
        )
        print("Register Response (Setup):", response.json())  # Debug statement
        self.assertEqual(response.status_code, 201)
        self.assertIn("User registered successfully", response.json()["message"])

    def tearDown(self):
        """
        Clean up the test environment.
        Delete the test user after each test.
        """
        # Delete the test user
        response = requests.delete(
            f'{BASE_URL}/delete_user',
            json={"email": self.test_user["email"]}
        )
        print("Delete User Response (Teardown):", response.json())  # Debug statement
        self.assertEqual(response.status_code, 200)
        self.assertIn("User deleted successfully", response.json()["message"])

    def test_register(self):
        """
        Test user registration.
        """
        # Attempt to register a new user
        new_user = {
            "username": "new_user",
            "email": "new@example.com",
            "password": "newpassword"
        }
        response = requests.post(
            f'{BASE_URL}/register',
            json=new_user
        )
        print("Register Response:", response.json())  # Debug statement
        self.assertEqual(response.status_code, 201)
        self.assertIn("User registered successfully", response.json()["message"])

        # Attempt to register the same user again (should fail)
        response = requests.post(
            f'{BASE_URL}/register',
            json=new_user
        )
        print("Duplicate Register Response:", response.json())  # Debug statement
        self.assertEqual(response.status_code, 400)
        self.assertIn("User already exists", response.json()["message"])

    def test_login(self):
        """
        Test user login.
        """
        # Test valid login
        response = requests.post(
            f'{BASE_URL}/login',
            json={
                "email": self.test_user["email"],
                "password": self.test_user["password"]
            }
        )
        print("Login Response:", response.json())  # Debug statement
        self.assertEqual(response.status_code, 200)
        self.assertIn("access_token", response.json())

        # Test invalid login (wrong password)
        response = requests.post(
            f'{BASE_URL}/login',
            json={
                "email": self.test_user["email"],
                "password": "wrongpassword"
            }
        )
        print("Invalid Login Response:", response.json())  # Debug statement
        self.assertEqual(response.status_code, 401)
        self.assertIn("Invalid credentials", response.json()["message"])

    def test_protected(self):
        """
        Test the protected route.
        """
        # Log in to get a token
        login_response = requests.post(
            f'{BASE_URL}/login',
            json={
                "email": self.test_user["email"],
                "password": self.test_user["password"]
            }
        )
        print("Login Response:", login_response.json())  # Debug statement
        token = login_response.json().get("access_token")
        print("Token:", token)  # Debug statement

        # Access the protected route
        protected_response = requests.get(
            f'{BASE_URL}/protected',
            headers={"Authorization": f"Bearer {token}"}
        )
        print("Protected Response:", protected_response.json())  # Debug statement
        self.assertEqual(protected_response.status_code, 200)
        self.assertIn("logged_in_as", protected_response.json())

        # Test accessing the protected route without a token (should fail)
        protected_response = requests.get(
            f'{BASE_URL}/protected'
        )
        print("Unauthorized Protected Response:", protected_response.json())  # Debug statement
        self.assertEqual(protected_response.status_code, 401)
        self.assertIn("Missing Authorization Header", protected_response.json()["msg"])

    def test_get_users(self):
        """
        Test getting all users.
        """
        response = requests.get(f'{BASE_URL}/users')
        print("Get Users Response:", response.json())  # Debug statement
        self.assertEqual(response.status_code, 200)
        self.assertIsInstance(response.json(), list)

if __name__ == '__main__':
    unittest.main()