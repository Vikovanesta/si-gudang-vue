<script setup lang="ts">
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'


</script>

<template>
  <div class="">
   

    <div class="flex flex-col overflow-hidden">
      <Header />
     
      <div class="flex flex-col lg:flex-row lg:h-fit">
        <Sidebar />

        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div class="container mx-auto ">
            <slot />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
