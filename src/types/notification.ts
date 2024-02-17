import { Scalars } from '@types';
import { NotificationPlacement } from 'antd/es/notification/interface';
import { ReactNode } from 'react';

// Hooks Type Definitions.

// Notification Types
export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export type NotificationParams = {
  key?: Scalars['String'];
  type: NotificationType;
  message: Scalars['String'];
  description?: Scalars['String'];
  duration?: Scalars['Int'];
  placement?: NotificationPlacement;
  icon?: ReactNode;
  style?: object;
  className?: Scalars['String'];
  threshold?: Scalars['Int'];
  stack?: boolean;
  btn?: ReactNode;
};

export type NotifyParams = {
  key?: Scalars['String'];
  message: Scalars['String'];
  description?: Scalars['String'];
  btn?: ReactNode;
};
