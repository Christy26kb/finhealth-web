import { NotificationPlacement } from 'antd/es/notification/interface';
import { ReactNode } from 'react';

// Hooks Type Definitions.

// Notification Types
export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export type NotificationParams = {
  key?: string;
  type: NotificationType;
  message: string;
  description?: string;
  duration?: number;
  placement?: NotificationPlacement;
  icon?: ReactNode;
  style?: object;
  className?: string;
  threshold?: number;
  stack?: boolean;
  btn?: ReactNode;
};

export type NotifyParams = {
  key?: string;
  message: string;
  description?: string;
  btn?: ReactNode;
};
