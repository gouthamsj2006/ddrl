import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../context/AuthContext';

function ProtectedRoute({ element, ...props }) {
  const { user, isLoading } = useAuthStore();

  if (isLoading) {
    return <p>Loading...</p>; // Show loading indicator while checking auth
  }

  if (!user) {
    return <Navigate to="/login" replace />; // Redirect to login if not logged in
  }

  return <Outlet />; // Render the protected route
}

export default ProtectedRoute;