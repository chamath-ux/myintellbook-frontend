<template>
    <div class="col-md-12 d-flex justify-content-center align-items-center border-bottom-1 border p-0 bg-white" v-if="!routeParam">
          <div class="d-none d-xl-flex justify-content-between align-items-center" style="width: 65%;">
            <img src="../assets/webIcon.jpeg" alt="Logo" class="logo" style="width:45px; " />
            
            
            <div class="d-flex justify-content-end align-items-center gap-2 w-100">
                <IconField :pt="{
                    root: 'w-50 mx-2',
                    icon: 'bg-white border-0 p-1',
                    input: 'w-100'
                }">
                    <InputIcon class="pi pi-search" />
                    <InputText  placeholder="Search..."  class="w-75" style="border-radius: 20px; height: 35px; font-size: 0.8rem;"  />
                </IconField>
                <ul class="nav-list d-flex align-items-center gap-2 m-0 p-0 list-unstyled w-50">
                <li v-for="(item, index) in items" :key="index" class="nav-item d-flex flex-column justify-content-center align-items-center" @click="item.command">
                    <OverlayBadge value="2" size="small" v-if="item.label == 'Notifications'" :pt="{
                        root: 'mx-2',
                        badge: 'bg-danger text-white rounded-circle d-flex justify-content-center align-items-center',
                        badgeValue: 'text-white'
                    }">
                        <!-- <Button icon="pi pi-bell" severity="secondary" rounded text size="small" class="d-flex flex-column" @click="showNotifications" > -->
                            <i class="pi pi-bell" style="font-size: 1.2rem;"></i>
                            
                            <!-- </Button> -->
                    </OverlayBadge>
                    <i class="pi" v-else :class="item.icon" style="font-size: 1.2rem; margin-right: 0.5rem;"></i>
                    <span class="nav-label" @click="item.command">{{item.label}}</span>
                    <!-- <Button :label="item.label" :icon="item.icon" class="nav-button" @click="item.command" /> -->
                </li>
            </ul>
              
             <Popover ref="op">
                        <div class="w-100">
                            <div class="d-flex justify-content-between">
                                <h6 class="fw-semibold">Notifications</h6>
                                <p class="fw-semibold text-danger">Mark all as read</p>
                            </div>
                            <Notifications />
                            <Notifications />
                            <Notifications />
                        </div>
                </Popover>
                 <div class="d-flex justify-content-center align-items-center cursor-pointer flex-column" @click="toggle">
                    <Avatar :image="(basicInfo.profile_image)? basicInfo.profile_image : userPng" shape="circle" class="m-0"/>
                    <span style="font-size:12px;" class="opacity-50 d-flex flex-row align-items-center">
                        Me
                        <i class="pi pi-chevron-down ms-1" style="font-size: 0.8rem;"></i>
                    </span>
                 </div>
                <TieredMenu ref="menu" id="overlay_menu" :model="sidebar" :popup="true">
                    <template #start>
                        <div class="d-flex align-items-center p-2 flex-column border-bottom">
                            <div class="d-flex flex-row items-center p-0">
                            <Avatar :image="(basicInfo.profile_image)?basicInfo.profile_image:userPng" class="mr-2 me-2" shape="circle" style="width:40px;height:40px;" />
                                <span class="d-flex flex-column items-start" style="font-size:15px;">
                                    <span class="font-bold">{{ basicInfo.first_name+" "+basicInfo.last_name}}</span>
                                    <span class="font-bold opacity-50">{{ (basicInfo.currently_working.length >0) ? basicInfo.currently_working[0].company:'' }}</span>
                                    <span class="text-sm">{{ (basicInfo.currently_working.length >0)? basicInfo.currently_working[0].location:'' }}</span>
                                </span>
                            </div>
                            <Button  label="info" variant="outlined" severity="info" size="small" class="w-100 m-0 rounded-4 mt-2 fw-semibold max-h-25" @click="router.push('/profile')">
                                View Profile
                            </Button>
                        </div>
                        
                        
                    </template>
                    <template #item="{ item, props }">
                        <a class="flex items-center" v-bind="props.action">
                            <span :class="item.icon" />
                            <span>{{ item.label }}</span>
                        </a>
                    </template>
                    <template #end>
                        <div class=" p-1">
                            <Button  label="Logout" variant="text" severity="secondary" size="small" class="text-start w-100 rounded-4 max-h-25" @click="logOut">
                                Sign Out
                            </Button>
                        </div>
                    </template>
                </TieredMenu>
            </div>
          </div>
          <!-- Mobile Dropdown Menu -->
          

    </div>
    <div class="d-flex d-xl-none justify-content-between align-items-center p-2 bg-white border-bottom-1 border" v-if="!routeParam">
         <img src="../assets/webIcon.jpeg" alt="Logo" class="logo" style="width:45px; " />
          <IconField :pt="{
                    root: 'mx-2',
                    icon: 'bg-white border-0 p-1',
                    input: 'w-100'
                }">
                    <InputIcon class="pi pi-search" />
                    <InputText  placeholder="Search..."  class="w-100" style="border-radius: 20px; height: 35px; font-size: 0.8rem;"  />
            </IconField>
         <Button icon="pi pi-bars"
        severity="secondary"
        rounded text size="small"
        class="d-flex d-sm-flex d-xl-none"
        @click="toggleMobileMenu" />
    </div>

<div v-if="mobileMenuVisible" class="mobile-dropdown d-xl-none bg-white border-top p-3 w-100">
  <ul class="list-unstyled mb-2">
    <li v-for="(item, index) in items" :key="'m-' + index" class="mb-2 d-flex align-items-center gap-2" @click="item.command">
      <i :class="`pi ${item.icon}`"></i>
      <span>{{ item.label }}</span>
    </li>
    <li class="mb-2">
      <Button label="Notifications" icon="pi pi-bell" class="w-100" @click="showNotifications" />
    </li>
  </ul>

  <div class="d-flex align-items-center gap-2 mb-2">
    <Avatar :image="basicInfo.profile_image || userPng" shape="circle" />
    <div class="d-flex flex-column">
      <strong>{{ basicInfo.first_name }} {{ basicInfo.last_name }}</strong>
      <small class="text-muted">{{ basicInfo.currently_working[0]?.company }}</small>
    </div>
  </div>
  <Button label="Sign Out" severity="danger" class="w-100" @click="logOut" />
</div>
</template>
<script setup lang="ts">
import Menubar from 'primevue/menubar';
import TieredMenu from 'primevue/tieredmenu';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import { useRouter } from 'vue-router';
import Popover from 'primevue/popover';
import OverlayBadge from 'primevue/overlaybadge';
import Notifications from '../components/commonComponents/Notifications.vue';
import { useUserStore } from '@/stores/User/userStore';
import { useUserProfile } from '@/stores/User/userProfile';
import { ref, computed, watch } from "vue";
import { useRoute } from 'vue-router';
import Avatar from 'primevue/avatar';   //Optional for grouping
import userPng from '@/assets/user.png';


const menu = ref<InstanceType<typeof TieredMenu> | null>(null);
const router = useRouter();
const route = useRoute();
const userStore = useUserStore();
const userProfile = useUserProfile();
const basicInfo = computed(()=> userProfile.getSummaryDetails);
const op = ref< InstanceType<typeof Popover> | null>(null);
const hideNavBar = ref<boolean>(false);
const routeParam = computed(()=>route.meta.hideNavBar);

const mobileMenuVisible = ref(false)

const toggleMobileMenu = () => {
  mobileMenuVisible.value = !mobileMenuVisible.value
}
const items = ref([
   {
       label: 'Home',
       icon: 'pi pi-home',
      command: () => {router.push('/home');} 
   },
   {
       label: 'Profile',
       icon: 'pi pi-user',
       command: () => {router.push('/profile');}
   },
   {
       label: 'Users',
       icon: 'pi pi-users',
       command: () => {router.push('/profiles');}
   },
  
   {
       label: 'Exam',
       icon: 'pi pi-bars',
       items: [
           {
               label: 'New',
               icon: 'pi pi-plus',
               command: () => {router.push('/exams');}
           },
           {
               label: 'Saved',
               icon: 'pi pi-save',
               command: () => {router.push('/exams');}
           }    
       ]
   },
   {
    label: 'Categories',
    icon: 'pi pi-folder',
    command: () => {router.push('/exams');}
   },
    {
       label: 'Notifications',
       icon: 'pi pi-bell',
       command: (event:any)=>{ showNotifications(event); }
   },
]);

const sidebar =  ref([
   {
       label: 'Home',
       icon: 'pi pi-home',
      command: () => {router.push('/home');} 
   },
   {
       label: 'Profile',
       icon: 'pi pi-user',
       command: () => {router.push('/profile');}
   },
   {
       label: 'Users',
       icon: 'pi pi-users',
       command: () => {router.push('/profiles');}
   },
   {
       label: 'Exam',
       icon: 'pi pi-bars',
       items: [
           {
               label: 'New',
               icon: 'pi pi-plus',
               command: () => {router.push('/exams');}
           },
           {
               label: 'Saved',
               icon: 'pi pi-save',
               command: () => {router.push('/exams');}
           }    
       ]
   },
   {
    label: 'Categories',
    icon: 'pi pi-folder',
    command: () => {router.push('/exams');}
   },
   {
    label: 'Settings',
    icon: 'pi pi-cog',
    items:[
        {
            label:'Login Informations',
            icon:'pi pi-user-edit',
            command: () => {router.push('/accountSettings/loginInformations');}
        },
        {
            label:'Privacy',
            icon:'pi pi-lock',
            command: () => {router.push('/accountSettings/privacyInformations');}
        },
         {
            label:'Delete Account',
            icon:'pi pi-trash',
            command: () => {router.push('/accountSettings/deleteAccount');}
        }
    ]
   }
]);

const toggle = (event:any) => {
    if(menu.value)
    {
        menu.value.toggle(event);
    }
};

const showNotifications = (event:any) =>
{
    if(op.value)
    {
        op.value.toggle(event);
    }
}

const logOut = async() =>{
    let result = await userStore.logOut();
    if(result.code == 200){
        mobileMenuVisible.value = false;
         router.push('/')
    }
}


</script>
<style>
.nav-label {
    font-size: 0.8rem;
    color: #333;
    cursor: pointer;
}
.nav-item {
    text-align: center;
    padding: 0.5rem;
    transition: background-color 0.3s ease;
}
.nav-item:hover {
    background-color: #f0f0f0;
}
.nav-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
}
</style>
