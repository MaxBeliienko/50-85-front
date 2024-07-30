import { createSlice } from '@reduxjs/toolkit';
import {
  addWater,
  deleteWater,
  editWater,
  fetchDailyWater,
  fetchMonthWater,
  fetchTodayWater,
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
    todayWater: [],
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
      .addCase(fetchTodayWater.pending, handlePending)
      .addCase(fetchTodayWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.todayWater = action.payload;
      })
      .addCase(fetchTodayWater.rejected, handleRejected)
      .addCase(addWater.pending, handlePending)
      .addCase(addWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.todayWater.push(action.payload);
      })
      .addCase(addWater.rejected, handleRejected)
      .addCase(editWater.pending, handlePending)
      .addCase(editWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.dailyWater.findIndex(
          water => water._id === action.payload._id
        );
        if (index >= 0) {
          state.dailyWater[index] = {
            ...state.dailyWater[index],
            time: action.payload.time,
            volume: action.payload.volume,
          };
        }
        const indexToday = state.todayWater.findIndex(
          water => water._id === action.payload._id
        );
        if (indexToday >= 0) {
          state.todayWater[indexToday] = {
            ...state.todayWater[indexToday],
            time: action.payload.time,
            volume: action.payload.volume,
          };
        }
      })
      .addCase(editWater.rejected, handleRejected)
      .addCase(deleteWater.pending, handlePending)
      .addCase(deleteWater.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.dailyWater.findIndex(
          item => item._id === action.meta.arg
          // item => item._id === action.payload.id
        );
        state.dailyWater.splice(index, 1);
        const indexToday = state.todayWater.findIndex(
          item => item._id === action.meta.arg
          // item => item._id === action.payload.id
        );
        state.todayWater.splice(indexToday, 1);
      })
      // .addCase(deleteWater.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.error = null;
      //   state.dailyWater.filter(item => item._id !== action.payload);
      // })
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
