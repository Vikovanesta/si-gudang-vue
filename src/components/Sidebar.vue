<!-- Sidebar.vue -->
<script setup lang="ts">
import { ref, onMounted,computed } from 'vue';
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
  'bg-main-blue text-white font-bold border-main-blue shadow-lg',
);
const inactiveClass = ref(
  'text-black font-bold hover:bg-gray-600  hover:border-gray-600 hover:border-opacity-25 hover:bg-opacity-25 hover:text-gray-100',
);
const isAcademic = computed(() => {
  return user.value && (user.value.role.name === 'teacher' || user.value.role.name === 'student');
});
const isLaboran = computed(() => {
  return user.value && user.value.role.name === 'laboran';
});
const isAdmin = computed(() => {
  return user.value && user.value.role.name === 'admin';
});

onMounted(async () => {
  // Fetch user data after the component is mounted
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const response = await apiClient.get('/me');
      console.log('Sidebar Backend Response:', response.data);

      if (response.data.status === true && response.data.data) {
        user.value = response.data.data;
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
  <div class="flex-1 lg:flex-none">

    <div class="overflow-y-auto bg-gray-200 lg:h-screen">

      <h1 class="text-xl font-semibold text-gray-600 mx-5">Menu</h1>

      <nav v-if="isAcademic" class="mt-8">
        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Blank' ? activeClass : inactiveClass]"
          to="/blank"
        >
          <IonIcon name="home" class="w-5 h-5 text-[#9A9AB0]"></IonIcon>
          <span class="mx-4 font-medium">DAFTAR ALAT</span>
        </router-link>

        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Statistik' ? activeClass : inactiveClass]"
          to="/statistik"
        >
          <IonIcon name="stats-chart-outline" class="w-5 h-5 text-[#9A9AB0]"></IonIcon>
          <span class="mx-4 font-medium">STATUS PENGAJUAN PEMINJAMAN</span>
        </router-link>

        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'ProdukSaya' ? activeClass : inactiveClass]"
          to="/produksaya"
        >
          <IonIcon name="bag-outline" class="w-5 h-5 text-[#9A9AB0]"></IonIcon>
          <span class="mx-4 font-medium">RIWAYAT PEMINJAMAN</span>
        </router-link>
      </nav>
      
      <nav v-if="isLaboran" class="mt-8">
        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Order' ? activeClass : inactiveClass]"
          to="/order"
        >
          <IonIcon name="cart-outline" class="w-5 h-5 text-[#9A9AB0]"></IonIcon>
          <span class="mx-4 font-medium">PERMINTAAN PEMINJAMAN</span>
        </router-link>
  
        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Transaksi' ? activeClass : inactiveClass]"
          to="/transaksi"
        >
          <IonIcon name="card-outline" class="w-5 h-5 text-[#9A9AB0]"></IonIcon>
          <span class="mx-4 font-medium">RIWAYAT ALAT YANG DIPINJAM</span>
        </router-link>
      
        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Promosi' ? activeClass : inactiveClass]"
          to="/promosi"
        >
          <IonIcon name="newspaper-outline" class="w-5 h-5 text-[#9A9AB0]"></IonIcon>
          <span class="mx-4 font-medium">MANAJEMEN ALAT</span>
        </router-link>
  
        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Pesan' ? activeClass : inactiveClass]"
          to="/pesan"
        >
          <IonIcon name="chatbubbles-outline" class="w-5 h-5 text-[#9A9AB0]"></IonIcon>
          <span class="mx-4 font-medium">KONFIRMASI AKUN SISWA</span>
        </router-link>
      </nav>
      
      <nav v-if="isAdmin" class="mt-8">
        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Review' ? activeClass : inactiveClass]"
          to="/review"
        >
          <IonIcon name="chatbox-ellipses-outline" class="w-5 h-5 text-[#9A9AB0]"></IonIcon>
          <span class="mx-4 font-medium">DATA PEMINJAMAN</span>
        </router-link>
  
        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Setting' ? activeClass : inactiveClass]"
          to="/setting"
        >
          <IonIcon name="settings-outline" class="w-5 h-5 text-[#9A9AB0]"></IonIcon>
          <span class="mx-4 font-medium">ALAT MASUK</span>
        </router-link>
  
        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Setting' ? activeClass : inactiveClass]"
          to="/setting"
        >
          <IonIcon name="settings-outline" class="w-5 h-5 text-[#9A9AB0]"></IonIcon>
          <span class="mx-4 font-medium">ALAT KELUAR</span>
        </router-link>
  
        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Setting' ? activeClass : inactiveClass]"
          to="/setting"
        >
          <IonIcon name="settings-outline" class="w-5 h-5 text-[#9A9AB0]"></IonIcon>
          <span class="mx-4 font-medium">TRANSAKSI ALAT</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

