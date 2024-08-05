import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../../apiClient';

export const fetchMonthWater = createAsyncThunk(
  'water/month',
  async ({ year, month }, thunkAPI) => {
    try {
      const res = await apiClient.get('/water/month', {
        params: { year, month },
      });
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDailyWater = createAsyncThunk(
  'water/daily',
  async ({ year, month, day }, thunkAPI) => {
    try {
      const res = await apiClient.get('/water/daily', {
        params: { year, month, day },
      });
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTodayWater = createAsyncThunk(
  'water/today',
  async (_, thunkAPI) => {
    const date = new Date();
    const today = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    };
    const month = today.month < 10 ? `0${today.month}` : today.month;
    const day = today.day < 10 ? `0${today.day}` : today.day;

    try {
      const res = await apiClient.get('/water/daily', {
        params: { year: today.year, month, day },
      });
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'water/addWater',
  async ({ volume, time, date }, thunkAPI) => {
    try {
      const response = await apiClient.post('/water', { volume, time, date });
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (id, thunkAPI) => {
    try {
      const response = await apiClient.delete(`/water/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteTodayWater = createAsyncThunk(
  'water/deleteTodayWater',
  async (id, thunkAPI) => {
    try {
      const response = await apiClient.delete(`/water/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editWater = createAsyncThunk(
  'water/editWater',
  async ({ id, volume, time }, thunkAPI) => {
    try {
      const response = await apiClient.patch(`/water/${id}`, { volume, time });
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
