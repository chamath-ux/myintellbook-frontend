import instance from '@/assets/axios';

export async function checkAuth() {
    try {
      const response = await instance.get('/user');
      return response.status;
    } catch (error) {
      return false;
    }
  }