import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component }) => {
    const token = localStorage.getItem('myToken');

  return token ? (
    component
  ) : (
    <Navigate to="/login"></Navigate>
  )
}

export default PrivateRoute