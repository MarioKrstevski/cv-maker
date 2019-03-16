import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { Router, Link } from '@reach/router';
import LoginPage from './scenes/Login/LoginPage';
import EditorPage from './scenes/Editor/EditorPage';
import WebsitePage from './scenes/Website/WebsitePage';
import PrivateRoute from './routing/PrivateRoute';
import { ThemeProvider } from 'styled-components';
import { materialUiTheme, styledComponentsTheme } from './theme/theme';
import './App.scss';
import auth from './services/AuthService';
import PublicRoute from './routing/PublicRoute';

function App() {
  return (
    <MuiThemeProvider theme={materialUiTheme}>
      <ThemeProvider theme={styledComponentsTheme}>
        <div>
          <nav>
            <Link to="/">Website</Link> <Link to="editor">Editor</Link> <Link to="login">Login</Link> {'  '}
            <Link onClick={auth.logout} to="/">
              Log out
            </Link>
          </nav>

          <Router>
            {/* <LoginPage path="login" /> */}
            <PublicRoute component={LoginPage} restricted={auth.isLogin()} path="login" />
            <WebsitePage path="/" default />
            <PrivateRoute path="/editor" component={EditorPage} />
          </Router>
        </div>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
