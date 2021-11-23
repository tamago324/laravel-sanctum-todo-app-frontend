import React from 'react';
import { Navigate } from 'react-router-dom';
import user from '@/Models/user';

export const RequireAuth = ({ children }) => {
  return user.isLoggedIn() ? children : <Navigate to="/login" replace />;
};
