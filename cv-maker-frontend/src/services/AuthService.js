const TOKEN_KEY = 'jwt';

const auth = {
  init: () => {},
  login: () => {
    localStorage.setItem(TOKEN_KEY, 'TestLogin');
  },
  logout: () => {
    localStorage.removeItem(TOKEN_KEY);
  },
  isLogin: () => {
    if (localStorage.getItem(TOKEN_KEY)) {
      return true;
    }

    return false;
  },
};

export default auth;
