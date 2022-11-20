import { axiosInstance } from './axios';

export const getAllSneaker = async () => {
  try {
    const res = await axiosInstance.get('sneakers');
    return res.data;
  } catch (error) {
    throw Error(String(error));
  }
};
