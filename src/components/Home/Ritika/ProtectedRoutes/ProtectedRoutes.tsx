import React from 'react';
import { Navigate } from 'react-router-dom';
import Ritika from '..';

const PrivateRoutes: React.FC = () => {
  const user = JSON.parse(localStorage.getItem('user')!);
  return user ? <Ritika /> : <Navigate to='/login' />;
};

export default PrivateRoutes;
