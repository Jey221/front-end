import { Navigate } from 'react-router-dom';
import React from 'react';

let isLogged = () => {
  let token = localStorage.getItem('token');
  return !!token;
};

const AuthGuard = ({ children }) => {
  if (!isLogged()) {
    return <Navigate to="/SignIn" />;
  }
  return children;
};

export default AuthGuard;
