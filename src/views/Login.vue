<!-- Login.vue -->
<template>
  <div class="bg-white dark:bg-gray-900 flex items-center justify-center h-screen">
    <div class="grid max-w-screen max-h-screen xl:gap-0 lg:grid-cols-12">
      <div class="hidden overflow-hidden justify-end lg:mt-0 lg:col-span-8 lg:flex lg:flex-row lg:flex-wrap h-screen bg-gray-100">

        <div class="flex flex-row flex-grow justify-self-start justify-start mt-8 ms-8">
          <img src="/src/assets/logo.png" alt="Logo" class="w-8 h-8 mx-2">
          <div>
            <p class="text-xs font-bold text-gray-600">Sistem Informasi</p>
            <p class="text-xs font-bold text-gray-600">Peminjaman Alat dan Gudang</p>
          </div>
        </div>

        <div class="max-h-fit flex justify-end">
          <img src="/src/assets/Illustration.png" alt="Illustration" class="object-contain">
        </div>

      </div>  
      
      <div class="mx-8 place-self-center lg:col-span-4">
        <div class="">
          <p class="text-2xl font-semibold text-gray-600">Selamat datang! 👋🏻</p>
          <p class="text-sm font-light text-gray-400 mt-2">Silakan isi data di bawah untuk masuk ke akun Anda!</p>
        </div>

        <form class="mt-8" @submit.prevent="login">
          <div v-if="errorMessage" class="text-red-500 mb-4">{{ errorMessage }}</div>

          <div class="relative mt-4">
            <input v-model="email" type="text" id="email" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>
         </div>

         <div class="relative mt-4">
            <input :type="showPassword ? 'text' : 'password'" v-model="password"  id="password" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="password" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>
            <button type="button" @click="togglePassword" class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-400 focus:outline-none">
              <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 576 512" fill="currentColor">
                <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 640 512" fill="currentColor">
                <path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z" />
              </svg>
            </button>
         </div>

          <div class="flex items-center justify-between mt-4">
            <div>
              <label class="inline-flex items-center">
                <input v-model="rememberMe" type="checkbox" class="text-main-blue border-gray-200 rounded-md focus:border-main-blue focus:ring focus:ring-opacity-40 focus:ring-indigo-500" />
                <span class="mx-2 text-sm text-gray-600">Ingat saya</span>
              </label>
            </div>

            <div>
              <a class="block text-sm text-main-blue fontme hover:underline" href="#">Lupa kata sandi?</a>
            </div>
          </div>

          <div class="mt-6">
            <button type="submit" class="w-full px-4 py-2 text-sm text-center text-white bg-main-blue rounded-md focus:outline-none hover:bg-blue-800" :disabled="isLoading">
              {{ isLoading ? 'Signing in...' : 'MASUK' }}
            </button>
          </div>
        </form>
        <div class="mt-6 text-center">
          <span class="text-gray-400">Belum memiliki akun? <a class="text-main-blue" href="#">Daftar</a> </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuth } from '../auth';
import apiClient from '../http-common';
import { useRouter } from 'vue-router';

const { setToken } = useAuth();
const router = useRouter();

const name = ref('merchant');
const email = ref('merchant@mail.com');
const password = ref('password');
const rememberMe = ref(false);
const errorMessage = ref<string | null>(null);
const isLoading = ref(false);
const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const login = async (): Promise<void> => {
  try {
    isLoading.value = true;

    const response = await apiClient.post('/v1/auth', {
      name: name.value,
      email: email.value,
      password: password.value,
    });

    console.log('Backend Response:', response.data);

    if ('token' in response.data.data) {
      setToken(response.data.data.token);

      const token = localStorage.getItem('token');
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      router.push('/dashboard');
    } else {
      errorMessage.value = 'Invalid response from the server';
    }

  } catch (err) {
    errorMessage.value = 'Failed to fetch CSRF cookie or invalid credentials';
    console.error('Login error:', err);
    isLoading.value = false;
  }
};
</script>
