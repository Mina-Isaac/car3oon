import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import personReducer from './PersonSlice';

export const store = configureStore({
  reducer: {
    persons: personReducer
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
