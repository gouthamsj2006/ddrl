import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import courseService from '../services/courseService';
import './CourseDetails.css'; // Import your CSS file

const sampleCourses = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description: 'Learn the basics of HTML, CSS, and JavaScript.',
    price: 99.99,
    instructor: 'John Doe',
  },
  {
    id: '2',
    title: 'Advanced React',
    description: 'Master advanced React concepts and techniques.',
    price: 199.99,
    instructor: 'Jane Smith',
  },
  {
    id: '3',
    title: 'Data Structures and Algorithms',
    description: 'Learn fundamental data structures and algorithms.',
    price: 149.99,
    instructor: 'Peter Jones',
  },
  {
    id: '4',
    title: 'Machine Learning with Python',
    description: 'Build machine learning models using Python.',
    price: 249.99,
    instructor: 'Sarah Williams',
  },
  {
    id: '5',
    title: 'Introduction to Cybersecurity',
    description: 'Learn about cybersecurity threats and best practices.',
    price: 129.99,
    instructor: 'David Brown',
  },
];


function CourseDetails() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        // Replace with your actual API call to fetch course details
        const courseData = sampleCourses.find((c) => c.id === courseId);
        if (!courseData) {
          throw new Error('Course not found');
        }
        setCourse(courseData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [courseId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!course) return <p>Course not found</p>;

  return (
    <div className="course-details">
      <h1>{course.title}</h1>
      <p>Instructor: {course.instructor}</p>
      <p>Price: ${course.price}</p>
      <p>{course.description}</p>
      {/* Add more details here */}
    </div>
  );
}

export default CourseDetails;