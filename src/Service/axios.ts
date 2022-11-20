import axios from 'axios';
export const axiosInstance = axios.create({
  baseURL: 'https://6379ce727419b414df93f542.mockapi.io/',
  timeout: 15000,
  headers: { 'content-type': 'application/json' }
});

axiosInstance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return error.message;
});
