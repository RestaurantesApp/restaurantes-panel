import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Login, Error404 } from '../../pages';

// Styles
import '../../styles/fonts.css';
import '../../styles/colors.css';

import { DashboardRouter, PrivateRoute, PublicRoute } from '../';

const AppRouter = ({ isAuth = false }) => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<PublicRoute element={Login} isAuth={isAuth} />}
        />
        <Route
          path="/dashboard/*"
          element={<PrivateRoute element={DashboardRouter} isAuth={isAuth} />}
        />
        <Route path="/page-error" element={<Error404 />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/page-error" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
