import { IBillData } from './../store/interface';
import { axiosInstanceWithAction } from './axios';

export const createBill = async (data: IBillData) => {
  try {
    const res = await axiosInstanceWithAction.post('/bill', data);
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
