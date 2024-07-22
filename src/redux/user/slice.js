import { createSlice } from '@reduxjs/toolkit';
import { getUserProfile, updateUserProfile } from './operations';

const handlePending = state => {
    state.loading = true;
  };
  
  const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
  };

const initialState = {
  user: {
    email: user.email,
    password: user.password,
  },
  token: user.token,
  isLoggedIn: true,
  isRefreshing: true,
};

const authSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getUserProfile.pending, handlePending)
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(getUserProfile.rejected, handleRejected)
      .addCase(updateUserProfile.pending, handlePending)
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
        state.error = null;
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;
