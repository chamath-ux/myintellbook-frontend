import { defineStore } from 'pinia';
import type {basicUserDetails} from '@/types/basicUserDetails';
import type {userGeneralInfoType} from '../../types/userGeneralInfoType'
import type {workExperianceType} from '../../types/workExperianceType'
import type {educationType} from '../../types/educationType';
import instance from '@/assets/axios';
// import {useApiService} from '../apiStore';
import CryptoJS from "crypto-js";

export const useUserProfile = defineStore('userProfile', {

    state: ():{
        userDetails : basicUserDetails, 
        category:Number, 
        userGeneralInfo:userGeneralInfoType,
        workExperiance:workExperianceType,
        experiance_id:Number,
        showExperianceEdit:boolean,
        educationDetails:educationType,
        education_id:Number
    } => ({
       userDetails:{
        first_name:'',
        last_name:'',
        gender:0,
        category:0,
        profession:0,
        birth_date:''
       },
        userGeneralInfo:{
             first_name: '',
            last_name: '',
            gender: 0,
            birth_date: '',
            visibility:{}
        },
        workExperiance:{
            title:'',
            company:'',
            currently_working:0,
            location:'',
            selectEmpType:0,
            locationType:0,
            visibility:{}
        },
        educationDetails:{
            school:'',
            degree:'',
            field_of_study:''
        },
       category:0,
       experiance_id:0,
       education_id:0,
       showExperianceEdit:false
    }),
    getters:{
        experianceEdit:(state)=> state.showExperianceEdit
    },
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

        async editUserGeneralInfo(){
            try{
                console.log(this.userGeneralInfo)
                let response = await instance.post('/edit-general-info',this.userGeneralInfo);
                if(response.data.code == 200)
                {
                    return response.data;
                }else{
                    new Error('general info edit faild');
                }
            }catch(e){
                console.error("Error in user details submission", e);
                  return {
                      code: 500,
                      message: "general info edit fail",
                  };
            }
        },

        async getGeneralInfo(){
            try{
            let response = await instance.get('get-general-info');
             if(response.data.code == 200)
                {
                    return response.data;
                }else{
                    new Error('general info getting failed');
                }
            }catch(e){
                    console.error("Error in user details submission", e);
                  return {
                      code: 500,
                      message: "general info edit fail",
                  };
            }
            
        },

        async addWorkExperiance(){
            try{
                let response = await instance.post('/add-work-experiance',this.workExperiance);
                console.log(response);
                 if(response.data.code == 200)
                {
                    return response.data;
                }else{
                    new Error('work experiance add failed');
                }

            }catch(e){
                 console.error("Error in user details submission", e);
                  return {
                      code: 500,
                      message: "getting work experiance fail",
                  };
            }
        },

        async getExperiance(){
            try{
                    let response = await instance.get('get-work-experiances');
                    if(response.data.code == 200)
                    {
                        return response.data;
                    }else{
                        new Error('Error in getting experiance data');
                    }
            }catch(e){
                 console.error("Error in getting experiance data", e);
                  return {
                      code: 500,
                      message: "getting work experiance fail",
                  };
            }
        },

        async getExperianceDetails()
        {
             try{
                    let response = await instance.get('/get-details-experiance/'+this.experiance_id);
                    if(response.data.code == 200)
                    {
                        return response.data;
                    }else{
                        new Error('Error in getting experiance data');
                    }
            }catch(e){
                 console.error("Error in getting experiance data", e);
                  return {
                      code: 500,
                      message: "getting work experiance fail",
                  };
            }
        },

        async editExperiance(){
            try{

                    let response = await instance.get('/edit-details-experiance/'+this.experiance_id,{params:this.workExperiance});
                    if(response.data.code == 200)
                    {
                        return response.data;
                    }else{
                        new Error('Error in editting experiance data');
                    }
            }catch(e){
                 console.error("Error in editting experiance data", e);
                  return {
                      code: 500,
                      message: "editting work experiance fail",
                  };
            }
        },

        async deleteExperiance(){
            try{

                let response = await instance.get('/delete-experiance/'+this.experiance_id);
                if(response.data.code == 200)
                {
                    return response.data;
                }else{
                    new Error('Error in deleting experiance data');
                }
            }catch(e){
                 console.error("Error in deleting experiance data", e);
                  return {
                      code: 500,
                      message: "deleting work experiance fail",
                  };
            }
        },

        async submitEducationData()
        {
            try{

                let response = await instance.post('/add-education-details/',this.educationDetails);
                if(response.data.code == 200)
                {
                    return response.data;
                }else{
                    new Error('Error in adding education data');
                }
            }catch(e){
                 console.error("Error in adding education data", e);
                  return {
                      code: 500,
                      message: "adding education fail",
                  };
            }
        },

        async getEducationInfo()
        {
            try{

                let response = await instance.get('/get-education-details/');
                if(response.data.code == 200)
                {
                    return response.data;
                }else{
                    new Error('Error in getting education data');
                }
            }catch(e){
                 console.error("Error in getting education data", e);
                  return {
                      code: 500,
                      message: "getting education fail",
                  };
            }
        },

        async getEducationDetail(){
            try{

                let response = await instance.get('/get-education-detail/'+this.education_id);
                if(response.data.code == 200)
                {
                    return response.data;
                }else{
                    new Error('Error in getting education data');
                }
            }catch(e){
                 console.error("Error in getting education data", e);
                  return {
                      code: 500,
                      message: "getting education fail",
                  };
            }
        },

        async deleteEducation()
        {
             try{

                let response = await instance.get('/delete-education/'+this.education_id);
                if(response.data.code == 200)
                {
                    return response.data;
                }else{
                    new Error('Error in deleting education data');
                }
            }catch(e){
                 console.error("Error in deleting education data", e);
                  return {
                      code: 500,
                      message: "deleting education fail",
                  };
            }
        }
    }
});