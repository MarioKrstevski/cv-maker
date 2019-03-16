import React from 'react';
import { Redirect } from '@reach/router';
import auth from '../services/AuthService';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return auth.isLogin() ? <Redirect to="/editor" noThrow /> : <Component {...rest} />;
};

export default PublicRoute;
