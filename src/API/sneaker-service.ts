import { ISneakerData } from 'src/store/interface';
import { axiosInstance, axiosInstanceWithAction } from './axios';

export const getAllSneaker = async () => {
  try {
    const res = await axiosInstance.get('/shoes');
    return res.data;
  } catch (error) {
    throw Error(String(error));
  }
};

export const getShoes = async (id: number) => {
  try {
    const res = await axiosInstance.get(`/shoes/${id}`);
    return res.data;
  } catch (error) {
    throw Error(String(error));
  }
};

export const addShoes = async ({ name, price, image, description }: ISneakerData) => {
  return await axiosInstanceWithAction.post('/shoes/', { name, price, image, description });
};

export const removeShoes = async (id: string) => {
  return await axiosInstanceWithAction.delete(`/shoes/${id}`);
};

export const updateShoes = async (id: string | undefined, data: ISneakerData) => {
  try {
    const res = await axiosInstanceWithAction.put(`/shoes/${id}`, data);
    return res.data;
  } catch (error) {
    throw Error(String(error));
  }
};

// export const getClient = async () => {
//   try {
//     const res = await axiosInstance.get('client');
//     return res.data;
//   } catch (error) {
//     throw Error(String(error));
//   }
// };
