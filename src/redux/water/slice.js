import { createSlice } from '@reduxjs/toolkit';
import {
  addWater,
  deleteWater,
  fetchDailyWater,
  fetchMonthWater,
} from './operations';
import { logOut } from '../auth/operations';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    dailyWater: [],
    monthWater: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMonthWater.pending, handlePending)
      .addCase(fetchMonthWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.monthWater = action.payload;
      })
      .addCase(fetchMonthWater.rejected, handleRejected)
      .addCase(fetchDailyWater.pending, handlePending)
      .addCase(fetchDailyWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.dailyWater = action.payload;
      })
      .addCase(fetchDailyWater.rejected, handleRejected)
      .addCase(addWater.pending, handlePending)
      .addCase(addWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.dailyWater.push(action.payload);
      })
      .addCase(addWater.rejected, handleRejected)
      .addCase(deleteWater.pending, handlePending)
      .addCase(deleteWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.dailyWater.findIndex(
          water => water.id === action.payload.id
        );
        state.dailyWater.splice(index, 1);
      })
      .addCase(deleteWater.rejected, handleRejected)
      .addCase(logOut.fulfilled, state => {
        state.dailyWater = [];
        state.monthWater = [];
        state.error = null;
        state.loading = false;
      });
  },
});

export const waterReducer = waterSlice.reducer;
