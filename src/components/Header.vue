<!-- Header.vue -->
<template>
  <header class="flex items-center justify-between px-6 py-4 bg-white border-b">
    <div class="flex items-center" >

      <div class="flex flex-row flex-grow justify-self-start justify-start pe-16">
        <img src="/src/assets/logo.png" alt="Logo" class="w-8 h-8 mx-2">
        <div>
          <p class="text-xs font-bold text-gray-600">Sistem Informasi</p>
          <p class="text-xs font-bold text-gray-600">Peminjaman Alat dan Gudang</p>
        </div>
      </div>


      <div class="relative mx-4 lg:mx-0">
        <span class="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>

        <input class="w-32 pl-3 pr-4 text-main-blue border-gray-200 rounded-xl sm:w-48 md:w-[20rem] lg:w-[40rem] xl:w-[55rem] 2xl:w-[60rem]  focus:border-main-blue focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
          type="text" placeholder="Search">
      </div>
    </div>

    <div class="flex items-center">
      <button class="flex mx-4 text-gray-600 focus:outline-none">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      <div class="relative ">
        <div class="flex items-center">
          <button
            class="relative z-10 flex w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
            @click="dropdownOpen = !dropdownOpen"
            v-if="user"
          >
            {{ console.log('User Object:', user) }}
            <img
              class="object-cover w-full h-full"
              :src="user?.logo || 'https://ui-avatars.com/api/?name=P&background=random&color=fff&rounded=true&bold=true&size=128&length=1'"
              alt="Your avatar"
            />
          </button>
  
        <button class="hidden relative z-10 lg:block lg:flex-row text-left px-3" @click="dropdownOpen = !dropdownOpen">
          <div v-if="user">
            <h1 class="text-sm font-semibold">{{ user?.profile?.name || 'Admin' }}</h1>
            <h1 class="text-sm text-gray-600 font-medium">{{ user?.email }}</h1>
          </div>
        </button>
      </div>
        </div>

        <div v-show="dropdownOpen" class="fixed inset-0 z-10 w-full h-full" @click="dropdownOpen = false" />

        <transition
          enter-active-class="transition duration-150 ease-out transform"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in transform"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div v-show="dropdownOpen" class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-main-blue hover:text-white">Profile</a>
            <router-link to="/produksaya" class="block px-4 py-2 text-sm text-gray-700 hover:bg-main-blue hover:text-white">Products</router-link>
            <router-link @click="handleLogout" to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-main-blue hover:text-white">Log out</router-link>
          </div>
        </transition>
      </div>

  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useSidebar } from '../composables/useSidebar';
import { useAuth } from '../auth';
import { useRouter } from 'vue-router';
import apiClient from '../http-common';
import { User } from '../types/user'; // Import the User interface

const { isOpen } = useSidebar();
const { getUserInfo, logout, setToken } = useAuth();
const router = useRouter();

const user = ref<User | null>(getUserInfo());
const dropdownOpen = ref(false);
const token = localStorage.getItem('token');

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const handleLogout = async () => {
  try {
    await logout();
    router.push('/');
  } catch (err) {
    console.error('Logout error:', err);
  }
};

onMounted(async () => {
  console.log('role:', user);

  try {
    // Fetch user data after the component is mounted
    if (token) {
      const response = await apiClient.get('/me');
      console.log('Backend Response:', response.data);
      console.log('User:', response.data.data);

      if (response.data.status === true && response.data.data) {
        user.value = response.data.data;
        setToken(token);
      } else {
        console.error('Error fetching user data:', response.data.message);
      }
    }
  } catch (error: any) {
    console.error('Error fetching user data:', error);
    if (error.response) {
      console.error('Error status:', error.response.status);
      if (error.response.status === 401) {
        console.error('Unauthorized. Redirect to login page.');
      }
    } else if (error.request) {
      console.error('No response received.');
    } else {
      console.error('Error message:', error.message);
    }
  }
});

</script>
