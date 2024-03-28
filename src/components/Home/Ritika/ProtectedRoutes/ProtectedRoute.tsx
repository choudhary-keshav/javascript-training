import React, { useEffect, useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';

interface ProtectedRouteProps {
  path: string;
  component: React.FC;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ path, component: Element, children }) => {
  const navigate = useNavigate();
  const user = useState(localStorage.getItem('user'))[0];

  useEffect(() => {
    if (!user) {
      return navigate('/ritika/login');
    }
  }, []);

  return (
    <Route path={path} element={<Element />}>
      {children}
    </Route>
  );
};

export default ProtectedRoute;
