import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import { waterReducer } from './water/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    water: waterReducer,
  },
});
