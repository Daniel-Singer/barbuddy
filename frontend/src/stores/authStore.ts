import { makeAutoObservable } from 'mobx';
import { persist } from 'mobx-persist';
import axios from 'axios';

class AuthStore {
  @persist('object') user = null;
  @persist token = '';

  constructor() {
    makeAutoObservable(this);
  }

  async login(email, password) {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      this.user = response.data.user;
      this.token = response.data.token;
      axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }

  logout() {
    this.user = null;
    this.token = '';
    delete axios.defaults.headers.common['Authorization'];
  }

  isAuthenticated() {
    return !!this.token;
  }
}

const authStore = new AuthStore();
export default authStore;
