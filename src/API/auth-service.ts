import { ISignUpData } from './../store/interface';
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
        sessionStorage.setItem('token', res.data.token);
        sessionStorage.setItem('userId', res.data.user._id);
      }
      return res.data;
    });
};

export const signup = async ({ username, password, firstname, lastname }: ISignUpData) => {
  return await axiosInstance.post('/auth/register', { username, password, firstname, lastname });
};
