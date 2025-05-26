import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/User/Register.vue';
import EmailConfirmation from '../views/User/EmailConfirmation.vue';
import Login from '../views/User/Login.vue';
import { checkAuth } from '../services/auth';
import Swal from 'sweetalert2';
import {useLoadingStore} from '@/stores/loadingStore';

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
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/password/reset',
      name: 'password.reset',
      component: () => import('../views/User/PasswordReset.vue')
    },
    {
      path: '/password/reset/:token',
      name: 'password.reset.token',
      component: () => import('../views/User/ChangePassword.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/User/Home.vue'),
      meta: {
        requiresAuth: true
      }
    }

  ],
});
// Add this after router is created
router.beforeEach(async(to, from, next) => {
  const loadingStore = useLoadingStore(); 
      loadingStore.loadingStart();
  const isAuthRequired = to.meta.requiresAuth;

  if (isAuthRequired) {
    const isLoggedIn = await checkAuth();

    if (isLoggedIn) {
      loadingStore.loadingStop();
      next();
    } else {
      // Redirect to login if not authenticated
      let confirm =await Swal.fire({
        icon: 'error',
        title: 'error',
        text: 'You are not authenticated. Please login to continue.',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 3000,
    });
   
        next('/login');
    
      
    }
  } else {
    loadingStore.loadingStop();
    next();
  }
})

export default router
