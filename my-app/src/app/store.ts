import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productDataSlice from '../features/productData/productDataSlice';

export const store = configureStore({
  reducer: {
    product: productDataSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
