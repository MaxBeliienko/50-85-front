// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { apiClient } from '../../apiClient';

// const asyncThunkWrapper = asyncFunction => async (args, thunkAPI) => {
//   try {
//     return await asyncFunction(args, thunkAPI);
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// };

// export const getUserProfile = createAsyncThunk(
//   'users/user-profile',
//   asyncThunkWrapper(async () => {
//     const { data } = await apiClient.get('/users/user-profile');
//     return data.data;
//   })
// );

// export const updateUserProfile = createAsyncThunk(
//   'users/user-update',
//   asyncThunkWrapper(async user => {
//     const { data } = await apiClient.patch('/users/user-profile', user);
//     return data;
//   })
// );
