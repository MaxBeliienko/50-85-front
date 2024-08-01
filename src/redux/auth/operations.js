import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient, setAuthHeader, clearAuthHeader } from '../../apiClient';

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

export const getGoogleOAuthUrl = createAsyncThunk(
  'auth/getGoogleOAuthUrl',
  async (_, thunkAPI) => {
    try {
      const response = await apiClient.get('/users/get-oauth-url');
      window.location.href = response.data.data.url;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginGoogle = createAsyncThunk(
  'auth/google',
  async ({ token }, thunkAPI) => {
    try {
      const response = await apiClient.post('/users/confirm-oauth', {
        code: token,
      });
      setAuthHeader(response.data.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkApi.rejectWithValue('No token found');
    }

    setAuthHeader(persistedToken);

    try {
      const { data } = await apiClient.post('/users/refresh-token');
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
