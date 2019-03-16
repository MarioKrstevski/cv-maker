import * as React from 'react';
import { useEffect, Component } from 'react';

import { MuiThemeProvider } from '@material-ui/core';
import { Router } from '@reach/router';
import { AuthenticationContextProvider } from './components/AuthenticationContext';
import Notifier from './components/Notifier';
import LoginPage from './scenes/Login/LoginPage';
import PrivateRoute from './routing/PrivateRoute';
import { DASHBOARD_ROUTE, LOGIN_ROUTE } from './routing/routes';
import { ThemeProvider } from 'styled-components';
import { materialUiTheme, styledComponentsTheme } from './theme/theme';
import './App.scss';

function App() {
  return (
    <MuiThemeProvider theme={materialUiTheme}>
      <ThemeProvider theme={styledComponentsTheme}>
        <AuthenticationContextProvider>
          <Notifier />
          <Router>
            <LoginPage path={LOGIN_ROUTE.pathname} default />
            <PrivateRoute component={DASHBOARD_ROUTE.component} path={DASHBOARD_ROUTE.pathname} />
          </Router>
        </AuthenticationContextProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
