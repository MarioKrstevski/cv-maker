import LoginPage from 'pages/LoginPage';
import DashboardPage from 'pages/DashboardPage';

const contextPath = '/client';

const DASHBOARD_ROUTE = {
  title: 'DASHBOARD',
  name: 'Dashboard',
  pathname: `${contextPath}/`,
  component: DashboardPage,
};

const LOGIN_ROUTE = {
  title: 'LOGIN',
  name: 'Login',
  pathname: `${contextPath}/login`,
  component: LoginPage,
};

export { DASHBOARD_ROUTE, LOGIN_ROUTE };
