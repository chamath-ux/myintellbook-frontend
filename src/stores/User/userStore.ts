import { defineStore } from 'pinia';
import type userRegisterType from '@/types/userRegisterType';
import instance from '@/assets/axios';

export const useUserStore = defineStore('user', {
    state: ():{userData : userRegisterType } => ({
        userData: {
            email: '',
            password: '',
            confirmPassword: '',
            
        }
      }),
      actions: {
        async submitUserData() {
          try{
              let response = await instance.post('/register', this.userData);

              if(response.status == 200){
                  console.log("User registered successfully");
              } else{
                  new Error("User registration failed");
              }
              console.log(response.data);
          }catch(e){
              console.error("Error in user registration", e);
          } 
      },
      }
});