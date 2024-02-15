import { notification } from 'antd';
import { NotificationParams, NotifyParams } from '@types';

const useNotify = () => {
  const [api] = notification.useNotification();

  const createComplexNotifier = (params: NotificationParams) => {
    const { type } = params;
    api[type]({ ...params });
  };

  const createSuccessNotifier = (notifyparams: NotifyParams) =>
    api.success({ ...notifyparams });

  const createErrorNotifier = (notifyparams: NotifyParams) =>
    api.error({ ...notifyparams });

  const createInfoNotifier = (notifyparams: NotifyParams) =>
    api.info({ ...notifyparams });

  const createWarningNotifier = (notifyparams: NotifyParams) =>
    api.warning({ ...notifyparams });

  return {
    createComplexNotifier,
    createSuccessNotifier,
    createErrorNotifier,
    createInfoNotifier,
    createWarningNotifier
  };
};

export default useNotify;
