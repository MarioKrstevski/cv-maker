import { Location, Redirect } from '@reach/router';
import React from 'react';
import auth from '../services/AuthService';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = auth.isLogin();
  return (
    <Location {...rest}>
      {({ location }) => {
        console.log('Should i acces url', location.pathname !== '/login', isLoggedIn);
        return location.pathname !== '/login' && isLoggedIn ? (
          <Component {...rest} />
        ) : (
          <Redirect to="/login" noThrow />
        );
      }}
    </Location>
  );
};

export default PrivateRoute;
