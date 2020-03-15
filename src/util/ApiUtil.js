import axios from 'axios';

let axiosInstance = axios.create();

export const simpleRequest = options => {
    return axiosInstance(options);
  };
  