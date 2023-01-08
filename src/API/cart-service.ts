import { ICart } from './../store/interface';
import { axiosInstance, axiosInstanceWithAction } from './axios';

export const getCartAll = async (id: string) => {
  try {
    const res = await axiosInstance.get(`/cart/${id}`);
    return res.data;
  } catch (error) {
    throw Error(String(error));
  }
};

export const addToCart = async (data: ICart) => {
  try {
    const res = await axiosInstanceWithAction.post('/cart', data);
    return res.data;
  } catch (error) {
    throw Error(String(error));
  }
};

export const updateCart = async (id: string | undefined, data: ICart) => {
  try {
    const res = await axiosInstance.put(`/cart/${id}`, data);
    return res.data;
  } catch (error) {
    throw Error(String(error));
  }
};

export const deleteCart = async (id: string) => {
  try {
    await axiosInstance.delete(`/cart/${id}`);
  } catch (err) {
    throw Error(String(err));
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
