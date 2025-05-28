import { defineStore } from 'pinia';
import type basicUserDetails from '@/types/basicUserDetails';
import instance from '@/assets/axios';

export const useUserProfile = defineStore('userProfile', {

    state: ():{userDetails : basicUserDetails, category:number} => ({
       userDetails:{
        first_name:'',
        last_name:'',
        gender:0,
        category:0,
        profession:0,
       },
       category:0
    }),
    actions:{
        async submitUserDetails() {
            try{
                let response = await instance.post('/insert-profile', this.userDetails);
                if(response.data.code == 200){
                    return response.data;
                } else{
                    new Error("User details submission failed");
                }
                
            }catch(e){
                console.error("Error in user details submission", e);
                  return {
                      code: 500,
                      message: "User details submission failed",
                  };
            } 

        },
        async getCategories() {
            try{
                let response = await instance.get('/categories');
                if(response.data.code == 200){
                    
                    return response.data;
                } else{
                    new Error("categories getting failed");
                }
            }catch(e){
                console.error("Error in user details submission", e);
                  return {
                      code: 500,
                      message: "categories getting failed",
                  };
            }
        },

        async getProfessions() {
            try{
                console.log(this.category);
                let response = await instance.get('/professions/'+this.category);
                if(response.data.code == 200){
                    
                    return response.data;
                } else{
                    new Error("professions getting failed");
                }
            }catch(e){
                console.error("Error in user details submission", e);
                  return {
                      code: 500,
                      message: "professions getting failed",
                  };
            }
        },
    }
});