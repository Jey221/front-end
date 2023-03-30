import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlices';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
