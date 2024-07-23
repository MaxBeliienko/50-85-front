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
    id: null,
    email: null,
    name: null,
    avatar: null,
    weight: null,
    activityLevel: null,
    gender: 'female',
    dailyRequirement: null,
  },
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getUserProfile.pending, handlePending)
      .addCase(getUserProfile.fulfilled, (state, payload) => {
        state.user = { payload };
        state.loading = false;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(getUserProfile.rejected, handleRejected)
      .addCase(updateUserProfile.pending, handlePending)
      .addCase(updateUserProfile.fulfilled, (state, payload) => {
        state.user = { ...state, payload };
        state.loading = false;
        state.error = null;
        state.isLoggedIn = true;
      });
  },
});

export const userReducer = userSlice.reducer;
