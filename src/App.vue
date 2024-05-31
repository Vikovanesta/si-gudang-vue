<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import apiClient from './http-common'

const defaultLayout = 'default'

const { currentRoute } = useRouter()

const layout = computed(
  () => `${currentRoute.value.meta.layout || defaultLayout}-layout`,
)

// Set authorization header if token is present in local storage
const token = localStorage.getItem('token');
if (token) {
  // Set headers for all subsequent requests
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>