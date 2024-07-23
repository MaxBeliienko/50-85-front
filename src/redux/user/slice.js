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
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
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

export const userReducer = userSlice.reducer;
