
import { ref, Ref } from 'vue';
import apiClient from './http-common';
import { User } from './types/user';

interface Auth {
  token: Ref<string | null>;
  setToken: (newToken: string) => void;
  logout: () => Promise<void>;
  getUserInfo: () => User | null; // Update the return type here
}

const token: Ref<string | null> = ref(localStorage.getItem('token'));
const user: Ref<User | null> = ref(null);

export function useAuth(): Auth {
  return {
    token,
    setToken(newToken: string) {
      localStorage.setItem('token', newToken);
      token.value = newToken;
      fetchUserInfo();
    },
    async logout() {
      try {
        const response = await apiClient.post('/logout');
        if (response.data.status === true) {
          removeToken();
        } else {
          console.error('Error logging out:', response.data.message);
        }
      } catch (error) {
        console.error('Error logging out:', error);
      }
    },
    getUserInfo() {
      return user.value;
    },
  };

  // Function to fetch user information
  async function fetchUserInfo() {
    try {
      const response = await apiClient.get('/me');
      if (response.data.status === true && response.data.data.user) {
        user.value = response.data.data.user;
      } else {
        console.error('Error fetching user data:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  function removeToken() {
    localStorage.removeItem('token');
    token.value = null;
    user.value = null;
  }
}
