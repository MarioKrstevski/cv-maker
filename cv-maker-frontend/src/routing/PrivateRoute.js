import { Location, Redirect } from '@reach/router';
import React, { useContext } from 'react';
import auth from '../services/AuthService';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Location {...rest}>
      {({ location }) => {
        console.log('Should i acces url', location.pathname !== '/login', auth.isLogin());
        return location.pathname !== '/login' && auth.isLogin() ? (
          <Component {...rest} />
        ) : (
          <Redirect to="/login" noThrow />
        );
      }}
    </Location>
  );
};

export default PrivateRoute;
