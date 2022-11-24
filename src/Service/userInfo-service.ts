import { axiosInstance } from './axios';

export const getCurrentUserInfo = async () => {
  try {
    const res = await axiosInstance.get('currentInfo');
    return res.data;
  } catch (error) {
    throw Error(String(error));
  }
};
