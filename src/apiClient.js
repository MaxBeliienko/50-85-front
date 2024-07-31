import axios from 'axios';
import { store } from './redux/store';
import { updateToken } from './redux/auth/slice';

const apiClient = axios.create({
  baseURL: 'https://aquatrack-backend.onrender.com',
  withCredentials: true,
});

let isRefreshing = false;
let refreshSubscribers = [];

const setAuthHeader = token => {
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  delete apiClient.defaults.headers.common['Authorization'];
};

const onRefreshed = token => {
  refreshSubscribers.map(callback => callback(token));
};

const addRefreshSubscriber = callback => {
  refreshSubscribers.push(callback);
};

apiClient.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(resolve => {
          addRefreshSubscriber(token => {
            originalRequest.headers['Authorization'] = `Bearer ${token}`;
            resolve(apiClient(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const response = await axios.post(
          'https://aquatrack-backend.onrender.com/users/refresh-token',
          {},
          { withCredentials: true }
        );
        const { accessToken } = response.data.data;

        store.dispatch(updateToken(accessToken));
        setAuthHeader(accessToken);
        isRefreshing = false;
        onRefreshed(accessToken);

        refreshSubscribers = [];
        return apiClient(originalRequest);
      } catch (err) {
        isRefreshing = false;
        refreshSubscribers = [];
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export { apiClient, setAuthHeader, clearAuthHeader };
