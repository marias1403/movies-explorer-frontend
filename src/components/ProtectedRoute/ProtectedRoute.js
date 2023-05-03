import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ loggedIn, children}) => {
  if (!loggedIn) {
    return <Navigate to='/signin'/>
  }
  return children;
}

export default ProtectedRoute;
