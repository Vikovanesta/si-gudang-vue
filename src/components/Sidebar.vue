<!-- Sidebar.vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useSidebar } from '../composables/useSidebar';
import { defineProps } from 'vue';
import { useAuth } from '../auth';
import { IonIcon } from '@ionic/vue';
import apiClient from '../http-common';

const { getUserInfo } = useAuth();
const { isOpen } = useSidebar();
const props = defineProps(['noPadding']);
const user = ref(getUserInfo());
const activeClass = ref(
  'bg-[#0063A7] text-white font-bold border-[#0063A7]',
);
const inactiveClass = ref(
  'border-white text-black font-bold hover:bg-gray-600  hover:border-gray-600 hover:border-opacity-25 hover:bg-opacity-25 hover:text-gray-100',
);

onMounted(async () => {
  // Fetch user data after the component is mounted
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const response = await apiClient.get('/v1/merchants/me');
      console.log('Sidebar Backend Response:', response.data);

      if (response.data.status === true && response.data.data.user) {
        user.value = response.data.data.user;
      } else {
        console.error('Error fetching user data:', response.data.message);
      }
    } catch (error: any) {
      console.error('Error fetching user data:', (error as Error).message);
    }
  }
});
</script>


<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
      @click="isOpen = false"
    />
    <!-- End Backdrop -->

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-white lg:translate-x-0 lg:static lg:inset-0"
    >
     <div class="flex px-5 items-center mt-10" v-if="user">
      <img :src="user?.merchant_logo" class="w-14 h-14 rounded-md">
      <div class="flex-row px-3">
        <h1 class="font-bold text-md">{{ user?.name || 'Guest' }}</h1>
        <h1 class="text-[#5541D7] font-bold text-[0.8rem]">Verified</h1>
      </div>
     </div>
     <hr class="h-px my-4 bg-gray-600 border-1 mx-3">

      <nav class="mt-8">
        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Dashboard' ? activeClass : inactiveClass]"
          to="/dashboard"
        >
          <IonIcon name="home" class="w-5 h-5 text-[#9A9AB0]"></IonIcon>
          <span class="mx-4">Dashboard</span>
        </router-link>

        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Statistik' ? activeClass : inactiveClass]"
          to="/statistik"
        >
          <IonIcon name="stats-chart-outline" class="w-5 h-5 text-[#9A9AB0]"></IonIcon>
          <span class="mx-4">Statistik</span>
        </router-link>

        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'ProdukSaya' ? activeClass : inactiveClass]"
          to="/produksaya"
        >
          <IonIcon name="bag-outline" class="w-5 h-5 text-[#9A9AB0]"></IonIcon>
          <span class="mx-4">Produk saya</span>
        </router-link>

        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Order' ? activeClass : inactiveClass]"
          to="/order"
        >
          <IonIcon name="cart-outline" class="w-5 h-5 text-[#9A9AB0]"></IonIcon>
          <span class="mx-4">Order</span>
        </router-link>

        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Transaksi' ? activeClass : inactiveClass]"
          to="/transaksi"
        >
          <IonIcon name="card-outline" class="w-5 h-5 text-[#9A9AB0]"></IonIcon>
          <span class="mx-4">Transaksi</span>
        </router-link>
      
        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Promosi' ? activeClass : inactiveClass]"
          to="/promosi"
        >
          <IonIcon name="newspaper-outline" class="w-5 h-5 text-[#9A9AB0]"></IonIcon>
          <span class="mx-4">Promosi</span>
        </router-link>

        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Pesan' ? activeClass : inactiveClass]"
          to="/pesan"
        >
          <IonIcon name="chatbubbles-outline" class="w-5 h-5 text-[#9A9AB0]"></IonIcon>
          <span class="mx-4">Pesan</span>
        </router-link>

        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Review' ? activeClass : inactiveClass]"
          to="/review"
        >
          <IonIcon name="chatbox-ellipses-outline" class="w-5 h-5 text-[#9A9AB0]"></IonIcon>
          <span class="mx-4">Review</span>
        </router-link>

        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Setting' ? activeClass : inactiveClass]"
          to="/setting"
        >
          <IonIcon name="settings-outline" class="w-5 h-5 text-[#9A9AB0]"></IonIcon>
          <span class="mx-4">Pengaturan</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

