import { configureStore } from '@reduxjs/toolkit';
import loaderSlice from './loaderSlice';
import countSlice from './countSlice';

const store = configureStore({
  reducer: {
    loader: loaderSlice,
    count: countSlice,
  },
  middleware: [],
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
