import { notificationSlice } from '@features/components/notifications/notificationSlice';
import { appSlice } from '@slices/appSlice';

export default {
  app: appSlice.reducer,
  notifications: notificationSlice.reducer
};
