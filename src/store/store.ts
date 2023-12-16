import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { MainPageDataSlice } from './reducers/mainPageSlice';
import { MainPageApi } from './api/api';

export const store = configureStore({
  reducer: {
    mainPage: MainPageDataSlice.reducer,
    [MainPageApi.reducerPath]: MainPageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MainPageApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
