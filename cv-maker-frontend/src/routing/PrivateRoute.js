import { Location, Redirect } from '@reach/router';
import React, { useContext } from 'react';
import { LOGIN_ROUTE } from './routes';
import { AuthenticationContext } from '../components/AuthenticationContext';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function withLocation(Component) {
  const WrappedComponent = props => {
    const authContext = useContext(AuthenticationContext);
    return (
      <Location {...props}>
        {({ location }) => {
          return location.pathname !== LOGIN_ROUTE.pathname && authContext.user ? (
            <Component {...props} />
          ) : (
            <Redirect to={LOGIN_ROUTE.pathname} noThrow />
          );
        }}
      </Location>
    );
  };
  WrappedComponent.displayName = `WithLocation(${getDisplayName(WrappedComponent)})`;
  return WrappedComponent;
}

function PrivateRoute({ component: Component, ...rest }) {
  return <Component {...rest} />;
}

export default withLocation(PrivateRoute);
