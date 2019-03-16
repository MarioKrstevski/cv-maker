const baseUrl = '/auth/internal_api/v1';
const SESSION_STORAGE_KEY = 'USER';

const AuthenticationService = {
  loggedIn: false,
  userName: null,
  request: null,
  userFromStorage: null,

  init() {
    const userFromStorage = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (userFromStorage) {
      this.request = JSON.parse(userFromStorage);
      this.loggedIn = true;
      this.userFromStorage = userFromStorage;
    }
  },

  async login(username, password) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    };

    const response = await fetch(`${baseUrl}/authenticate`, requestOptions);
    const authResponse = await response.json();
    if (authResponse.successful) {
      this.userName = username;
      this.request = {
        username,
        password,
      };
      this.loggedIn = true;
      sessionStorage.setItem(SESSION_STORAGE_KEY, requestOptions.body);
      const userData = {
        username: authResponse.username,
        roles: authResponse.roles,
      };
      return userData;
    } else {
      throw new Error('UPS!');
    }
  },

  async logout() {
    this.loggedIn = false;
    this.request = null;
  },
};

AuthenticationService.init();

export default AuthenticationService;
