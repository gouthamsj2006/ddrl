const API_URL = '/api/courses'; // Base URL for course-related API calls

const fetchCourses = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Failed to fetch courses: ${error.message}`);
  }
};

const createCourse = async (courseData, token) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Include auth token
      },
      body: JSON.stringify(courseData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to create course: ${errorData.error || response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Failed to create course: ${error.message}`);
  }
};

// Add other course-related functions (e.g., getCourseById, updateCourse, deleteCourse)

module.exports = { fetchCourses, createCourse }; // Export your functions