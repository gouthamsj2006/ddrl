import useAuthStore from '../context/AuthContext';

function Profile() {
  const { user, isLoading, error } = useAuthStore();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (user) {
    return (
      <div>
        <h1>Profile</h1>
        <p>Email: {user.email}</p>
        {/* Add other user details here */}
      </div>
    );
  }

  return <p>Please log in to view your profile.</p>;
}

export default Profile;