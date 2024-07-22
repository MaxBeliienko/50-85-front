import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const asyncThunkWrapper = asyncFunction => async (args, thunkAPI) => {
  try {
    return await asyncFunction(args, thunkAPI);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const getUserProfile = createAsyncThunk(
  'users/user-profile',
  asyncThunkWrapper(async user => {
    const { data } = await axios.get('/users/user-profile', user);
    setAuthHeader(data.token);
    return data;
  })
);

export const updateUserProfile = createAsyncThunk(
  'users/user-profile',
  asyncThunkWrapper(async user => {
    const { data } = await axios.patch('/users/user-profile', user);
    setAuthHeader(data.token);
    return data;
  })
);
