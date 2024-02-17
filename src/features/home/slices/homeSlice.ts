import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '@types';

const initialState = {
  currentUser: {},
  isChangesUnsaved: false // is changes unsaved by user
};

export type UserState = {
  currentUser: User;
  isChangesUnsaved: boolean;
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setCurrentUser: (
      state,
      { payload: { user } }: PayloadAction<{ user: User }>
    ) => ({
      ...state,
      currentUser: user
    }),
    setIsChangesUnsaved: (
      state,
      { payload: isChangesUnsaved }: PayloadAction<boolean>
    ) => ({
      ...state,
      isChangesUnsaved
    })
  }
});
export const { setCurrentUser, setIsChangesUnsaved } = homeSlice.actions;
export default homeSlice.reducer;
