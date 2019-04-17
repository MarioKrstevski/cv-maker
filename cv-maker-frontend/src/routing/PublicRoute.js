import React from 'react';
import { Redirect } from '@reach/router';

const PublicRoute = ({ component: Component, restricted, path, ...rest }) => {
  return restricted ? <Redirect to={path} noThrow /> : <Component {...rest} />;
};

export default PublicRoute;
