import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient, setAuthHeader, clearAuthHeader } from '../../apiClient';

// axios.defaults.baseURL = 'https://aquatrack-backend.onrender.com';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

const asyncThunkWrapper = asyncFunction => async (args, thunkAPI) => {
  try {
    return await asyncFunction(args, thunkAPI);
  } catch (error) {
    const serializableError = {
      message: error.message,
      name: error.name,
      code: error.code,
      response: error.response
        ? {
            status: error.response.status,
            data: error.response.data,
          }
        : undefined,
    };
    return thunkAPI.rejectWithValue(serializableError);
  }
};

export const registerUser = createAsyncThunk(
  'auth/register',
  asyncThunkWrapper(async user => {
    const { data } = await apiClient.post('/users/register', user);
    setAuthHeader(data.data.accessToken);
    return data;
  })
);

export const logIn = createAsyncThunk(
  'auth/login',
  asyncThunkWrapper(async user => {
    const { data } = await apiClient.post('/users/login', user);
    setAuthHeader(data.data.accessToken);
    return data;
  })
);

export const logOut = createAsyncThunk(
  'auth/logout',
  asyncThunkWrapper(async () => {
    await apiClient.post('/users/logout');
    clearAuthHeader();
  })
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  asyncThunkWrapper(async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token || localStorage.getItem('token');

    if (!persistedToken) {
      // const refreshResult = await thunkApi.dispatch(refreshUser());

      // if (refreshResult.error) {
      //   return thunkApi.rejectWithValue(refreshResult.error.message);
      // }
      // const newToken = refreshResult.payload;
      // setAuthHeader(newToken);
      return thunkApi.rejectWithValue('No token found');
    }

    setAuthHeader(persistedToken);

    try {
      const { data } = await apiClient.get('/users/user-profile');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  })
);

export const getUserProfile = createAsyncThunk(
  'users/user-profile',
  asyncThunkWrapper(async () => {
    const { data } = await apiClient.get('/users/user-profile');
    return data.data;
  })
);

export const updateUserProfile = createAsyncThunk(
  'users/user-update',
  asyncThunkWrapper(async user => {
    const { data } = await apiClient.patch('/users/user-profile', user);
    return data;
  })
);
