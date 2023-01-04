import { axiosInstance } from './axios';

export const getCurrentUserInfomation = async (id: string) => {
  try {
    const res = await axiosInstance.get(`/user/${id}`);
    return res.data;
  } catch (error) {
    throw Error(String(error));
  }
};
