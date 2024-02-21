import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@core/store';
import { User } from '@types';

const initialState = {
  currentUser: {} as User
};

export type UserState = {
  currentUser: User;
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCurrentUser: (
      state,
      { payload: { user } }: PayloadAction<{ user: User }>
    ) => ({
      ...state,
      currentUser: user
    })
  }
});
export const { setCurrentUser } = appSlice.actions;
export default appSlice.reducer;
export const selectAppState = (state: RootState) => state.app;
