import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://aquatrack-backend.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

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
    const { data } = await axios.post('/users/register', user);
    setAuthHeader(data.accessToken);
    return data;
  })
);

export const logIn = createAsyncThunk(
  'auth/login',
  asyncThunkWrapper(async user => {
    const { data } = await axios.post('/users/login', user);
    setAuthHeader(data.accessToken);
    return data;
  })
);

export const logOut = createAsyncThunk(
  'auth/logout',
  asyncThunkWrapper(async () => {
    await axios.post('/users/logout');
    clearAuthHeader();
  })
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  asyncThunkWrapper(async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      // const refreshResult = await thunkApi.dispatch(refreshUser());
      const refreshResult = await axios.post('/users/refresh-token');

      if (refreshResult.error) {
        return thunkApi.rejectWithValue(refreshResult.error.message);
      }
      const newToken = refreshResult.payload;
      setAuthHeader(newToken);
    } else {
      setAuthHeader(persistedToken);
    }
  })
);
