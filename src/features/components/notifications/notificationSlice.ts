import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@core/store';
import { NotificationParams } from '@types';

const initialState = {
  notifiers: [] as NotificationParams[]
};

export type NotificationState = {
  notifiers: NotificationParams[];
};

export const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    createNotifier: (
      state,
      { payload: { notifier } }: PayloadAction<{ notifier: NotificationParams }>
    ) => ({
      ...state,
      notifiers: state.notifiers.concat(notifier as NotificationParams)
    })
  }
});
export const { createNotifier } = notificationSlice.actions;
export default notificationSlice.reducer;
export const selectNotifiers = (state: RootState) =>
  state.notifications.notifiers;
