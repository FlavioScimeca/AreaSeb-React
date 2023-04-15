import { configureStore } from '@reduxjs/toolkit';
import wishBagReducer from './features/counter/wishSlice';

export const store = configureStore({
  reducer: {
    wishCounter: wishBagReducer,
  },
});
