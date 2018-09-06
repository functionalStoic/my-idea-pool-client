import decode from 'jwt-decode';

export default class AuthService {
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
        // Checking if token is expired. N
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  };

  // Retrieves the user token from localStorage
  getToken = () => localStorage.getItem('access_token');

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
