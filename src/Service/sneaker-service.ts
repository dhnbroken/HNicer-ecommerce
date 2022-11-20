import { axiosInstance } from './axios';

export const getAllSneaker = async () => {
  try {
    const res = await axiosInstance.get('sneakers');
    return res.data;
  } catch (error) {
    throw Error(String(error));
  }
};

export const getClient = async () => {
  try {
    const res = await axiosInstance.get('client');
    return res.data;
  } catch (error) {
    throw Error(String(error));
  }
};
