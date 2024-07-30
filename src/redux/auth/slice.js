import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  logIn,
  logOut,
  refreshUser,
  getUserProfile,
  updateUserProfile,
} from './operations';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const initialState = {
  user: {
    _id: null,
    email: null,
    gender: 'female',
    name: null,
    photo: null,
    weight: null,
    activityLevel: null,
    dailyRequirement: null,
    dailyWaterIntake: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        // state.user = action.payload.user;
        state.user = action.payload.data.user;
        state.token = action.payload.data.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.token = action.payload.data.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      })
      .addCase(getUserProfile.pending, handlePending)
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getUserProfile.rejected, handleRejected)
      .addCase(updateUserProfile.pending, handlePending)
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        state.loading = false;
        state.error = null;
      });
  },
});

export const authReducer = authSlice.reducer;
