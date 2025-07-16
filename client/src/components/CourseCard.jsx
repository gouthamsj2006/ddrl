import useAuthStore from '../context/AuthContext';

function CourseCard({ course }) {
  const { user } = useAuthStore();

  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <p>Price: ${course.price}</p>
      {user && ( // Conditionally render the Enroll button
        <button>Enroll</button>
      )}
    </div>
  );
}

export default CourseCard;