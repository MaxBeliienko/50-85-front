import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMonthWater = createAsyncThunk(
  'water/month',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/water/month');
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDailyWater = createAsyncThunk(
  'water/daily',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/water/daily');
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'water/addWater',
  async ({ volume }, thunkAPI) => {
    try {
      const response = await axios.post('/water', { volume });
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
  async (id, thunkAPI) => {
    try {
      const response = await axios.patch(`/water/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
