<template>
  <div class="bg-gray-200">
    <!-- <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <div :class="{ 'container mx-auto px-6 py-8': !noPadding }"> -->
        <slot />
      <!-- </div> -->
    <!-- </main> -->
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps(['noPadding']);
</script>
