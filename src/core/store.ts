import {
  configureStore,
  PreloadedState,
  combineReducers
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { notificationSlice } from '@features/components/notifications/notificationSlice';
import { authApi, baseApi } from './baseApi';
import storeLogger from './logger';
import { rtkQueryErrorLogger } from './errorHandler';

const middlewareList = (getDefaultMiddleware: CurriedGetDefaultMiddleware) => {
  const list = [rtkQueryErrorLogger, authApi.middleware, baseApi.middleware];
  if (process.env.NODE_ENV === 'development') {
    list.push(storeLogger);
  }
  return getDefaultMiddleware().concat(list);
};

export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
  notifications: notificationSlice.reducer
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
      middlewareList(getDefaultMiddleware),
    preloadedState
  });

export const store = setupStore({});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
