import useAuthStore from '../context/AuthContext';

function Layout({ children }) {
  const { user, isLoading } = useAuthStore();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {user ? (
        <p>Welcome, {user.email}! <button onClick={() => supabase.auth.signOut()}>Sign Out</button></p>
      ) : (
        <p>You are not logged in.</p>
      )}
      {children}
    </div>
  );
}

export default Layout;
