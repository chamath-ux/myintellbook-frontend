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
      meta:{
        hideNavBar:true
      }
    }, 
    {
      path: '/EmailConfirmation',
      name: 'EmailConfirmation',
      component: EmailConfirmation,
      meta:{
        hideNavBar:true
      }
    },
    {
      path:'/emailVerified',
      name:'emailVerified',
      component: () => import('../views/User/EmailVerified.vue'),
      meta:{
        hideNavBar:true
      }
    },
    {
      path: '/',
      name: 'login',
      component: Login,
      meta:{
        hideNavBar:true
      }
    },
    {
      path: '/password/reset',
      name: 'password.reset',
      component: () => import('../views/User/PasswordReset.vue'),
      meta:{
        hideNavBar:true
      }
    },
    {
      path: '/password/reset/:token',
      name: 'password.reset.token',
      component: () => import('../views/User/ChangePassword.vue'),
      meta:{
        hideNavBar:true
      }
    },
    { 
      path:'/basicDetails-fill',
      name:'basicDetails-fill',
      component: () => import('../views/User/BasicDetailsForm.vue'),
      meta: { 
        requiresAuth: true,
        hideNavBar:true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/User/Home.vue'),
      meta: {
        requiresAuth: true,
        hideNavBar:false
      }
    },
    {
      path:'/profiles',
      name:'profiles',
      component: () => import('../views/User/ProfilesList.vue'),
      meta: {
        requiresAuth: true,
        hideNavBar:false
      }
    },
    {
      path:'/profileEdit',
      name:'profileEdit',
      component: () => import('../views/User/ProfileEditPage.vue'),
      meta: {
        requiresAuth: true,
        hideNavBar:false
      },
       children: [
        {
          path:'/profileEdit/generalInfo',
          name:'generalInfo',
          component: () => import('../components/ProfilePage/GeneralInfo.vue'),
        },
        {
          path:'/profileEdit/workExperience/:id?',
          name:'workExperience',
          component: () => import('../components/ProfilePage/WorkExperiance.vue'),
        },
        {
          path:'/profileEdit/educationInfo/:id?',
          name:'education',
          component: () => import('../components/ProfilePage/EducationInfo.vue'),
        },
        {
          path:'/profileEdit/skillsInfo',
          name:'skillsInfo',
          component: () => import('../components/ProfilePage/SkillsInfo.vue'),
        },
        {
          path:'/profileEdit/addProfileImage',
          name:'addProfileImage',
          component: () => import('../components/ProfilePage/profilePohoto.vue'),
        },
        {
          path:'/profileEdit/addCoverImage',
          name:'addCoverImage',
          component: () => import('../components/ProfilePage/coverPhoto.vue'),
        }
    ]
    },
    {
      path:'/profile',
      name:'profile',
      component: () => import('../views/User/ProfilePage.vue'),
      meta: {
        requiresAuth: true,
        hideNavBar:false
      } 
    },
    {
      path:'/accountSettings',
      name:'accountSettings',
      component: () => import('../views/User/AccountSettings.vue'),
      meta: {
        requiresAuth: true,
        hideNavBar:false
      },
      children:[
        {
          path:'/accountSettings/loginInformations',
          name:'loginInformations',
          component: () => import('../components/AccountSettings/LoginInformations.vue'),
        },
        {
           path:'/accountSettings/deleteAccount',
          name:'deleteAccount',
          component: () => import('../components/AccountSettings/DeleteAccount.vue'),
        },
        {
          path:'/accountSettings/privacyInformations',
          name:'privacyInformations',
          component: () => import('../components/AccountSettings/PrivacyInfo.vue'),
        }
      ]
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
      loadingStore.loadingStop();
      // Redirect to login if not authenticated
      let confirm =await Swal.fire({
        icon: 'error',
        title: 'error',
        text: 'You are not authenticated. Please login to continue.',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 3000,
    });
   
        next('/');
    
      
    }
  } else {
    loadingStore.loadingStop();
    next();
  }
})

export default router
