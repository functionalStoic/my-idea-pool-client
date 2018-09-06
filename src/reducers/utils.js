import decode from 'jwt-decode';

export const isAuthActive = () => {
  // Get access token
  const access_token = localStorage.getItem('access_token');

  // If there is no access token return false
  if (!access_token) return false;

  // Get expiration property from decoded token
  const { exp } = decode(access_token);

  // Return false if it exists and is expired
  return !(exp && exp < Date.now() / 1000);
};
