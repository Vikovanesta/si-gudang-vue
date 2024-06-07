import Vue from 'vue';
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from './auth'

import Dashboard from './views/Dashboard.vue'
import Forms from './views/Forms.vue'
import Tables from './views/Tables.vue'
import UIElements from './views/UIElements.vue'
import Login from './views/Login.vue'
import Card from './views/Card.vue'
import Blank from './views/Blank.vue'

const Auth = useAuth();

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Login', component: Login, meta: { layout: 'empty', requiresAuth: false } },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/forms', name: 'Forms', component: Forms },
  { path: '/cards', name: 'Cards', component: Card },
  { path: '/tables', name: 'Tables', component: Tables },
  { path: '/ui-elements', name: 'UIElements', component: UIElements },
  { path: '/blank', name: 'Blank', component: Blank }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // Check if the user is authenticated and trying to access the login page
  if (to.name === 'Login' && Auth.isAuthenticated()) {
    // Redirect to the dashboard
    next({ name: 'Dashboard' });
  } else if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if the route requires authentication
    if (!Auth.isAuthenticated()) {
      // Redirect to login if not authenticated
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
