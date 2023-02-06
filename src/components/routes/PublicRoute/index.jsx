import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const PublicRoute = ({ isAuth, element: Element, option, ...rest }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate('/dashboard/home', { replace: true });
    } else {
      navigate('/login', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return <Element option={option} />;
};

PublicRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  element: PropTypes.func.isRequired,
};

export default PublicRoute;
