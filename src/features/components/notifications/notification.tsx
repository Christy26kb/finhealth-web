import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { NotificationParams } from '@types';
import { notification } from 'antd';
import { selectNotifiers } from './notificationSlice';

const Notification = () => {
  const notifiers = useSelector(selectNotifiers);

  useEffect(() => {
    if (notifiers.length > 0) {
      const notifierParams: NotificationParams = {
        key: nanoid(),
        ...notifiers[notifiers.length - 1]
      };
      notification.open(notifierParams);
    }
  }, [notifiers]);

  return null;
};

export default Notification;
