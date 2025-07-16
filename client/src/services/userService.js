const API_URL = '/api/auth'; // Base URL for user-related API calls

const signup = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Signup failed: ${errorData.error || response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Signup failed: ${error.message}`);
  }
};

const login = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Login failed: ${errorData.error || response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Login failed: ${error.message}`);
  }
};

// Add other user-related functions (e.g., getUserProfile, updateUserProfile)

module.exports = { signup, login }; // Export your functions