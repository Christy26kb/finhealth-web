import useNotify from '@hooks/notification';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { NotificationParams } from '@types';
import { selectNotifiers } from './notificationSlice';

const Notification = () => {
  const notifiers = useSelector(selectNotifiers);
  const { createComplexNotifier } = useNotify();

  useEffect(() => {
    if (notifiers.length > 0) {
      const notifierParams: NotificationParams = {
        key: nanoid(),
        ...notifiers[notifiers.length - 1]
      };
      createComplexNotifier(notifierParams);
    }
  }, [notifiers, createComplexNotifier]);

  return null;
};

export default Notification;
