import { ILoginData } from 'src/store/interface';
import { axiosInstance } from './axios';

export const login = async ({ username, password }: ILoginData) => {
  return await axiosInstance
    .post('/auth/login', {
      username,
      password
    })
    .then((res) => {
      if (res.data.token) {
        sessionStorage.setItem('token', JSON.stringify(res.data));
      }
      return res.data;
    });
};
