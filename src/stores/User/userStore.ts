import { defineStore } from 'pinia';
import type userRegisterType from '@/types/userRegisterType';
import instance from '@/assets/axios';

export const useUserStore = defineStore('user', {
    state: ():{userData : userRegisterType,email:string } => ({
        userData: {
            email: '',
            password: '',
            
        },
        email:'',
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
    async resetPassword() {
        try{
            let response = await instance.post('/password/reset', {email:this.email});
           
            if(response.data.code == 200){
                return response.data;
            } else{
                new Error("User password reset failed");
            }
            
        }catch(e:any){
            console.error("Error in user password reset", e);
              return {
                  code: 500,
                  message: e.response.data.message,
              };
        }
    },
    async changePassword(token:string) {
        try{
            let response = await instance.post('/password/reset/'+token, this.userData);
           
            if(response.data.code == 200){
                return response.data;
            } else{
                new Error("User password change failed");
            }
            
        }catch(e:any){
            console.error("Error in user password change", e);
              return {
                  code: 500,
                  message: e.response.data.message,
              };
        }
    },
    }
});