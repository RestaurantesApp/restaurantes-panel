import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuth, element: Element, ...rest }) => {
  return isAuth ? <Element /> : <Navigate to="/login" replace />;
};

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  element: PropTypes.func.isRequired,
};

export default PrivateRoute;
