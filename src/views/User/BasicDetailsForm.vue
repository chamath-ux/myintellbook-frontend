<template>
    <div class="flex-grow-1 justify-content-center align-items-center image-section overflow-auto row">
            <Panel
            
            :pt="{
                root: 'col-md-4',
                header: '',
            }">
                <template #header>
                <h4 >Enter Details <i class="pi pi-check" style="font-size: 1rem" v-if="submitData" v-tooltip="'Enter your username'"></i></h4>
                
                </template>
                <template #icons>
                    <Button icon="pi pi-user" severity="secondary" rounded text  />
                    <Menu ref="menu" id="config_menu"  popup />
                </template>
                 <h6 class="mt-3 m-0">Your Basics</h6>
                 <div class="row">
                    <InputText  v-model="UserDetails.first_name" placeholder="First Name" size="normal" id="first_name" class="col-md-6 col-sm-12 mt-3 "/>
                    <InputText  v-model="UserDetails.last_name" placeholder="Last Name" size="normal" id="last_name" class="col-md-6 col-sm-12 mt-3"/>
                    <Select v-model="UserDetails.gender" :options="gender" optionLabel="name" placeholder="Select a Gender" class="w-100 mt-3" id="gender"/>
                    <h6 class="mt-3 m-0">Your Profession</h6>
                    <Select v-model="UserDetails.category" :options="Categories" optionLabel="name" placeholder="Select a Category" class="col-md-6 mt-3" id="category" @click="fetchCategories"  @change="fetchProfession"/>
                    <Select v-model="UserDetails.profession_id" :options="Professions" optionLabel="name" placeholder="Select a Profession" class="col-md-6 mt-3" id="profession"/>
                    <p class="mt-3"> Enter your details to get started.</p>

                    <Button :label="DetailsButtonLabel" class="w-100" style="background-color:#a03829;" size="normal" @click="submitUserData" id="submitDetails">
                        <template #icon>
                            <i class="pi pi-spin pi-spinner" style="font-size: 1rem" v-if="submitData"></i>
                        </template>
                    </Button>
                 </div>
            </Panel>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import Panel from 'primevue/panel';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Select from 'primevue/select';
import Divider from 'primevue/divider';
import Tooltip from 'primevue/tooltip';
import basicUserDetails from '@/types/basicUserDetails';
import Menu from 'primevue/menu';
import { useUserProfile } from '@/stores/User/userProfile';
import showAlert from '@/composables/showAlert';
import RadioButton from 'primevue/radiobutton';
import {getCategory} from '@/composables/getCategory';
import professionCategoryType from '@/types/professionCategoryType';
import { useRouter } from 'vue-router';

const router = useRouter();
const UserDetails = ref<basicUserDetails>({
    first_name: '',
    last_name: '',
    gender: 0,
    category: 0,
    profession_id: 0,
});

const { CategoriesList, getProfessions } = getCategory();

const Categories = ref<professionCategoryType>([]);
const Professions = ref([]);

const fetchCategories = async() => {
    let result = await CategoriesList();
    Categories.value = result.data;
}

const fetchProfession = async() => {
    let result = await getProfessions(UserDetails.value.category.id);
    Professions.value = result.data;
}


const gender = ref([
    {name: 'Male',value:1},
    {name: 'Female',value:2},
    {name: 'Other',value:3},
]);



const DetailsButtonLabel = ref<string>('Submit and Continue');
const submitData = ref<boolean>(false);
const userProfile = useUserProfile();
const submitUserData = async() =>{
    DetailsButtonLabel.value = 'please wait...';
    submitData.value = true;
    UserDetails.value.profession_id = UserDetails.value.profession_id.id;
    UserDetails.value.category = UserDetails.value.category.id;
    UserDetails.value.gender = UserDetails.value.gender.value;
    userProfile.userDetails = UserDetails.value;
    let result = await userProfile.submitUserDetails();
    if(result.code == 200){

        let config ={
                    icon:'success',
                    title:'Success',
                    text: result.message,
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#a03829',
                    showConfirmButton:true
                }
       let confirm = await showAlert(config);

        if(confirm.isConfirmed){
            DetailsButtonLabel.value = 'Submit and Continue';
            submitData.value = false;
            router.push({ name: 'home' });
        }
    }else{
          let config ={
                    icon:'error',
                    title:'Error',
                    text: result.message,
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#a03829',
                    showConfirmButton:true
                }
            
        let confirm = await showAlert(config);
    }

}

onMounted(() => {

})
</script>
<style scoped>
.image-section{
    background-color:#ebe5d4;
    color:#a03829;
}
</style>