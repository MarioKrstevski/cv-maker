import LoginPage from '../scenes/Login/LoginPage';
import EditorPage from '../scenes/Editor/EditorPage';

const contextPath = '/client';

const EDITOR_ROUTE = {
  title: 'EDITOR',
  name: 'Editor',
  pathname: `${contextPath}/`,
  component: EditorPage,
};

const LOGIN_ROUTE = {
  title: 'LOGIN',
  name: 'Login',
  pathname: `${contextPath}/login`,
  component: LoginPage,
};

export { EDITOR_ROUTE, LOGIN_ROUTE };
