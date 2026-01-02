// Login Route Component
import { Navigate } from 'react-router-dom';
import { Login } from '../../pages/auth/Login';
import { useAuth } from '../../context/AuthContext';

export const LoginRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/" replace /> : <Login />;
};


