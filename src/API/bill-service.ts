import { IBillData } from './../store/interface';
import { axiosInstanceWithAction, axiosInstance } from './axios';

export const createBill = async (data: IBillData) => {
  try {
    const res = await axiosInstanceWithAction.post('/bill', data);
    return res.data;
  } catch (error) {
    throw Error(String(error));
  }
};

export const getAllBill = async () => {
  try {
    const res = await axiosInstance.get('/bill');
    return res.data;
  } catch (error) {
    throw Error(String(error));
  }
};

export const updateBill = async (id: string, data: IBillData) => {
  try {
    const res = await axiosInstanceWithAction.put(`/bill/${id}`, data);
    return res.data;
  } catch (error) {}
};
