import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMonthWater = createAsyncThunk(
  'water/month',
  async ({ year, month }, thunkAPI) => {
    try {
      const res = await axios.get('/water/month', { params: { year, month } });
      console.log(res.data);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDailyWater = createAsyncThunk(
  'water/daily',
  async ({ year, month, day }, thunkAPI) => {
    console.log('daily operatioms', year, month, day);
    try {
      const res = await axios.get('/water/daily', {
        params: { year, month, day },
      });
      console.log(res.data);
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
      console.log('operations', volume, time);
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
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editWater = createAsyncThunk(
  'water/editWater',
  async (id, { volume, time }, thunkAPI) => {
    try {
      const response = await axios.patch(`/water/${id}`, { volume, time });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
