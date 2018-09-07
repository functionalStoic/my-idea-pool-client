import axiosInstance from './utils/axiosInstance';

export class AuthApi {
  static async login(email, password) {
    try {
      const { data } = await axiosInstance.post('/access-tokens', {
        email,
        password
      });

      axiosInstance.defaults.headers['X-Access-Token'] = data.jwt;

      return data;
    } catch (error) {
      throw error;
    }
  }

  static async logout() {
    try {
      const refresh_token = localStorage.getItem('refresh_token');
      return axiosInstance.delete('/access-tokens', {
        data: { refresh_token }
      });
    } catch (error) {
      throw error;
    }
  }

  static async signup(name, email, password) {
    try {
      const { data } = await axiosInstance.post(`/users`, {
        name,
        email,
        password
      });

      axiosInstance.defaults.headers['X-Access-Token'] = data.jwt;

      return data;
    } catch (error) {
      throw error;
    }
  }

  static async getUserInfo() {
    try {
      const { data } = await axiosInstance.get(`/me`);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
