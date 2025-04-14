import axios from 'axios';

const api = axios.create({
  timeout: 10000,
  headers: {
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  response => response.data,
  error => {
    console.error('请求出错:', error);
    return Promise.reject(error);
  }
);

export default api;
