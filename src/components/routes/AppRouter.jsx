import React, { useContext } from 'react';

// Hooks
import { AuthContext } from '../../context';

// Components
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Login, Error404 } from '../pages';
import { DashboardRouter, PrivateRoute, PublicRoute } from './';

export const AppRouter = () => {
  const { authState } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<PublicRoute element={Login} isAuth={authState.isLogin} />}
        />
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute
              element={DashboardRouter}
              isAuth={authState.isLogin}
            />
          }
        />
        <Route path="/page-error" element={<Error404 />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/page-error" replace />} />
      </Routes>
    </Router>
  );
};
