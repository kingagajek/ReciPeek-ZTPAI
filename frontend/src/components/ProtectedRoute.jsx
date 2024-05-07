import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const ProtectedRoute = () => {
  const { auth } = useAuth();

  return auth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
