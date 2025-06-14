import axios from "axios";

const instance = axios.create({
    baseURL: 'http://13.235.244.218:8081/api',
    timeout: 10000, // 10 seconds timeout
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }

    
  });

  instance.interceptors.request.use(
      
    config => {


        const token = localStorage.getItem('userToken'); // Or from Vuex/Pinia/etc.
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      error =>{

        console.error("Request error:", error);
        return Promise.reject(error);
      }
  )

  export default instance;