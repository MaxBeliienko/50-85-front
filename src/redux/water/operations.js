import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMonthWater = createAsyncThunk(
  'water/month',
  async ({ year, month }, thunkAPI) => {
    try {
      const res = await axios.get('/water/month', { params: { year, month } });
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
      const res = await axios.get('/water/daily', {
        params: { year, month, day },
      });
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'water/addWater',
  async ({ volume, time }, thunkAPI) => {
    try {
      const response = await axios.post('/water', { volume, time });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/water/${id}`);
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
      console.log('operation edit', id, volume, time);
      const response = await axios.patch(`/water/${id}`, { volume, time });
      console.log('response', response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
