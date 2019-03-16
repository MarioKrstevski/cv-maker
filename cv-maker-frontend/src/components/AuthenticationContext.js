import React, { useState } from 'react';
import AuthenticationService from '../services/AuthenticationService';

const SESSION_STORAGE_KEY = 'USER_DATA';
const AuthenticationContext = React.createContext({
  user: {
    name: null,
    role: null,
  },
  login: (name, roles) => {},
  logout: () => {},
});

const AuthenticationContextProvider = props => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY)));

  const login = (name, roles) => {
    const userData = { name, roles };
    setUser(userData);
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(userData));
  };
  const logout = () => {
    setUser(null);
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
    AuthenticationService.logout();
  };

  const authenticationContextShape = {
    user,
    login,
    logout,
  };
  return (
    <AuthenticationContext.Provider value={authenticationContextShape}>{props.children}</AuthenticationContext.Provider>
  );
};

export { AuthenticationContext, AuthenticationContextProvider };
