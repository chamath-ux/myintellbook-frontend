import { defineStore } from 'pinia';
import type userRegisterType from '@/types/userRegisterType';
import instance from '@/assets/axios';

export const useUserStore = defineStore('user', {
    state: ():{userData : userRegisterType } => ({
        userData: {
            email: '',
            password: '',
            
        }
      }),
      actions: {
        async submitUserData() {
          try{
              let response = await instance.post('/register', this.userData);
              if(response.data.code == 200){
                  return response.data;
              } else{
                  new Error("User registration failed");
              }
              
          }catch(e){
              console.error("Error in user registration", e);
                return {
                    code: 500,
                    message: "User registration failed",
                };
          } 
      },
      async loginUser() {
        try{
            let response = await instance.post('/login', this.userData);
           
            if(response.data.code == 200){
                return response.data;
            } else{
                new Error("User login failed");
            }
            
        }catch(e){
            console.error("Error in user login", e);
              return {
                  code: 500,
                  message: "User login failed",
              };
        }
    },
    }
});