import { axiosInstance } from './axios';

export const getAllClothes = async () => {
  try {
    const res = await axiosInstance.get('clothes');
    return res.data;
  } catch (error) {
    throw Error(String(error));
  }
};
