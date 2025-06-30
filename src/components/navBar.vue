<template>
     <Menubar v-if="hideNavBar" :model="items" :pt="{
        
     }">
        <template #start>
            <img src="@/assets/myinteli.svg" alt="Logo" class="logo" style="width:35px; " />
          
        </template>
        <template #end>
                <div class="d-flex justify-content-end align-items-center gap-2">
                    <OverlayBadge value="2" size="small" :pt="{
                       root:'mx-2',
                    }">
                        <Button icon="pi pi-bell" severity="secondary" rounded text size="small" @click="showNotifications" />
                    </OverlayBadge>
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
                    <Avatar :image="basicInfo.profile_image" shape="circle" @click="toggle"/>
                    <TieredMenu ref="menu" id="overlay_menu" :model="sidebar" :popup="true">
                        <template #start>
                            <div class="d-flex align-items-center p-2 flex-column border-bottom">
                                <div class="d-flex flex-row items-center p-0">
                                <Avatar :image="basicInfo.profile_image" class="mr-2 me-2" shape="circle" style="width:40px;height:40px;" />
                                    <span class="d-flex flex-column items-start" style="font-size:15px;">
                                        <span class="font-bold">{{ basicInfo.first_name+" "+basicInfo.last_name}}</span>
                                        <span class="font-bold opacity-50">{{ (basicInfo.currently_working.length >0) ? basicInfo.currently_working[0].company:'' }}</span>
                                        <span class="text-sm">{{ (basicInfo.currently_working.length >0)? basicInfo.currently_working[0].location:'' }}</span>
                                    </span>
                                </div>
                                <!-- <Button  label="info" variant="outlined" severity="info" size="small" class="w-100 m-0 rounded-4 mt-2 fw-semibold max-h-25">
                                    View Profile
                                </Button> -->
                            </div>
                           
                            
                        </template>
                         <!-- <template #submenulabel="{ item }">
                                <span class="text-dark fw-semibold">{{ item.label }}</span>
                        </template> -->
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
        </template>
      
    </Menubar>
</template>
<script setup lang="ts">
import Menubar from 'primevue/menubar';
import TieredMenu from 'primevue/tieredmenu';
import Button from 'primevue/button';
import { useRouter } from 'vue-router';
import Popover from 'primevue/popover';
import OverlayBadge from 'primevue/overlaybadge';
import Notifications from '../components/commonComponents/Notifications.vue';
import { useUserStore } from '@/stores/User/userStore';
import { useUserProfile } from '@/stores/User/userProfile';
import { ref, computed, watch } from "vue";
import { useRoute } from 'vue-router';
import Avatar from 'primevue/avatar';   //Optional for grouping


const menu = ref<InstanceType<typeof TieredMenu> | null>(null);
const router = useRouter();
const route = useRoute();
const userStore = useUserStore();
const userProfile = useUserProfile();
const basicInfo = computed(()=> userProfile.getSummaryDetails);
const op = ref< InstanceType<typeof Popover> | null>(null);
const hideNavBar = ref<boolean>(false);
const routeParam = computed(()=>route.meta.hideNavBar);
watch(routeParam,()=>{
    if(routeParam.value){
        hideNavBar.value = true;
    }
    hideNavBar.value = false;
});
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
     label: 'Search',
    icon: 'pi pi-search',
    
   }
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
         router.push('/')
    }
}


</script>
