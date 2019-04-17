import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { Router, Link } from '@reach/router';
import LoginPage from './scenes/Login/LoginPage';
import EditorPage from './scenes/Editor/EditorPage';
import WebsitePage from './scenes/Website/WebsitePage';
import PreviewPage from './scenes/Preview/PreviewPage';
import PrivateRoute from './routing/PrivateRoute';
import { ThemeProvider } from 'styled-components';
import { materialUiTheme, styledComponentsTheme } from './theme/theme';
import './App.scss';
import PublicRoute from './routing/PublicRoute';
import auth from './services/AuthService';

function App() {
  return (
    <MuiThemeProvider theme={materialUiTheme}>
      <ThemeProvider theme={styledComponentsTheme}>
        <div>
          <nav>
            <Link to="/">Website</Link> <Link to="editor">Editor</Link> <Link to="login">Login</Link> {'  '}
            <Link to="/preview"> Preview </Link>
            <Link onClick={auth.logout()} to="/">
              Log out
            </Link>
          </nav>

          <Router>
            <PublicRoute component={LoginPage} restricted={auth.isLogin()} path="/login" />
            <PublicRoute component={PreviewPage} path="/preview" />
            <WebsitePage path="/" default />
            <PrivateRoute path="/editor" component={EditorPage} />
          </Router>
        </div>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
