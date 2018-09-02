import decode from 'jwt-decode';

// API server domain
const API_DOMAIN = 'https://small-project-api.herokuapp.com';

export default class AuthService {
  // Get a token from api server using the fetch api
  login = (email, password) =>
    this.fetch(`${API_DOMAIN}/access-tokens`, {
      method: 'POST',
      body: JSON.stringify({ email, password })
    }).then(res => {
      // Setting the token in localStorage
      this.setToken(res);
      return Promise.resolve(res);
    });

  // Checks if there is a saved token and that it's still valid
  loggedIn = () => {
    // Get token from localstorage
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  };

  isTokenExpired = token => {
    try {
      const { exp } = decode(token);
      if (exp < Date.now() / 1000) {
        console.log('expired');
        // Checking if token is expired. N
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  };

  // Saves user token to localStorage
  setToken = ({ jwt, refresh_token }) => {
    localStorage.setItem('jwt', jwt);
    localStorage.setItem('refresh_token', refresh_token);
  };

  // Retrieves the user token from localStorage
  getToken = () => localStorage.getItem('jwt');
  getRefreshToken = () => localStorage.getItem('refresh_token');

  refreshToken = async () => {
    const refresh_token = await this.getRefreshToken();
    debugger;
    this.fetch(`${API_DOMAIN}/access-tokens/refresh`, {
      method: 'POST',
      body: JSON.stringify({ refresh_token })
    }).then(res => {
      // Setting the token in localStorage
      this.setToken({ jwt: res.jwt, refresh_token });
      return Promise.resolve(res);
    });
  };
  // Clear user token and profile data from localStorage
  logout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('refresh_token');
  };

  fetch = (url, options) => {
    // performs api calls sending the required authentication headers
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };

    // Setting Authorization header
    // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
    if (this.loggedIn()) {
      headers['Authorization'] = `Bearer ${this.getToken()}`;
    }

    return fetch(url, { headers, ...options })
      .then(this._checkStatus)
      .then(res => res.json());
  };

  _checkStatus = res => {
    // raises an error in case res status is not a success
    if (res.status >= 200 && res.status < 300) {
      // Success status lies between 200 to 300
      return res;
    } else {
      var error = new Error(res.statusText);
      error.res = res;
      throw error;
    }
  };
}
