import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { ClipLoader } from 'react-spinners';

const ProtectedRoute = ({ roles, child }) => {
  const { auth, user } = useAuth();

  if (!auth) {
    return <Navigate to="/welcome" replace />;
  }

  if (!user) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <ClipLoader size={50} color={"#123abc"} loading={true} />
      </div>
    );
  }

  if (roles && (!user.role || !roles.includes(user.role.name))) {
    return <Navigate to="/" replace />;
  }

  return child;
};

export default ProtectedRoute;