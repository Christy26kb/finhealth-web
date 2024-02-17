import { notificationSlice } from '@features/components/notifications/notificationSlice';
import { homeSlice } from '@features/home/slices/homeSlice';

export default {
  notifications: notificationSlice.reducer,
  home: homeSlice.reducer
};
