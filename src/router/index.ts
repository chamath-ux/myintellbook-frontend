import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/User/Register.vue';
import EmailConfirmation from '../views/User/EmailConfirmation.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/EmailConfirmation',
      name: 'EmailConfirmation',
      component: EmailConfirmation,
    },
    {
      path:'/emailVerified',
      name:'emailVerified',
      component: () => import('../views/User/EmailVerified.vue'),
    }

  ],
})

export default router
