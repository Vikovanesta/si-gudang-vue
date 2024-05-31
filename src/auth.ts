// auth.ts

import { ref, Ref } from 'vue';
import apiClient from './http-common';
import { User } from './types/user';

interface Auth {
  token: Ref<string | null>;
  setToken: (newToken: string) => void;
  removeToken: () => void;
  getUserInfo: () => User | null; // Update the return type here
}

const token: Ref<string | null> = ref(localStorage.getItem('token') || null);
const user: Ref<User | null> = ref(null);

export function useAuth(): Auth {
  return {
    token,
    setToken(newToken: string) {
      localStorage.setItem('token', newToken);
      token.value = newToken;

      // Fetch user information immediately after setting the token
      fetchUserInfo();
    },
    removeToken() {
      localStorage.removeItem('token');
      token.value = null;
      user.value = null; // Clear user information when the token is removed
    },
    getUserInfo() {
      // Return user information directly from the ref
      return user.value;
    },
  };

  // Function to fetch user information
  async function fetchUserInfo() {
    try {
      const response = await apiClient.get('/v1/merchants/me');
      if (response.data.status === true && response.data.data.user) {
        // Update the user object in your state
        user.value = response.data.data.user;
      } else {
        console.error('Error fetching user data:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
}
