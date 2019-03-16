import React, { Component } from 'react';
import { Location, Redirect } from '@reach/router';
import auth from '../services/AuthService';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return restricted ? <Redirect to="/" noThrow /> : <Component {...rest} />;
  //   return (
  //     <Location {...rest}>
  //       {({ location }) => {

  //       }}
  //     </Location>
  //   );
};

export default PublicRoute;
