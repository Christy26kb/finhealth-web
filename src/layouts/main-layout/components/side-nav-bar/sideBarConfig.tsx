import React from 'react';
import useTranslate from '@hooks/intl';
import UserPermissionTypes from '@constants/permissions';
import {
  DEBT,
  EXPENSE,
  HOME,
  INCOME,
  INVESTMENT,
  LEND,
  PROFILE,
  SUBSCRIPTION
} from '@constants/routes';
import { SideNavItem } from '@types';
import { MenuProps } from 'antd';
import {
  HomeOutlined,
  UsergroupAddOutlined,
  GroupOutlined
} from '@ant-design/icons';

export const MoreActionsMenuItems = [
  {
    label: 'Edit User',
    key: 'edit_user'
  },
  {
    label: 'Logout',
    key: 'logout'
  }
];

export const SideNavItems: SideNavItem[] = [
  {
    id: 'home',
    nameKey: 'sideNav.home.title',
    path: HOME.HOME,
    icon: React.createElement(HomeOutlined),
    permissions: [UserPermissionTypes.VIEW_HOME]
  },
  {
    id: 'profiles',
    nameKey: 'sideNav.profiles.title',
    path: PROFILE.PROFILES,
    icon: React.createElement(UsergroupAddOutlined),
    permissions: [UserPermissionTypes.VIEW_PROFILES]
  },
  {
    id: 'finance_management',
    nameKey: 'sideNav.finance_management.title',
    path: '',
    icon: React.createElement(GroupOutlined),
    childPaths: [
      {
        id: 'incomes',
        nameKey: 'sideNav.finance_management.menu_items.incomes.title',
        path: INCOME.INCOMES,
        permissions: [UserPermissionTypes.VIEW_INCOMES]
      },
      {
        id: 'expenses',
        nameKey: 'sideNav.finance_management.menu_items.expenses.title',
        path: EXPENSE.EXPENSES,
        permissions: [UserPermissionTypes.VIEW_EXPENSES]
      },
      {
        id: 'lends',
        nameKey: 'sideNav.finance_management.menu_items.lends.title',
        path: LEND.LENDS,
        permissions: [UserPermissionTypes.VIEW_LENDS]
      },
      {
        id: 'debts',
        nameKey: 'sideNav.finance_management.menu_items.debts.title',
        path: DEBT.DEBTS,
        permissions: [UserPermissionTypes.VIEW_DEBTS]
      },
      {
        id: 'investments',
        nameKey: 'sideNav.finance_management.menu_items.investments.title',
        path: INVESTMENT.INVESTMENTS,
        permissions: [UserPermissionTypes.VIEW_INCOMES]
      },
      {
        id: 'subscriptions',
        nameKey: 'sideNav.finance_management.menu_items.subscriptions.title',
        path: SUBSCRIPTION.SUBSCRIPTIONS,
        permissions: [UserPermissionTypes.VIEW_SUBSCRIPTIONS]
      }
    ]
  }
];

export const useMapSideNavConfigToMenuItems = (
  navItemsConfigs: SideNavItem[]
): MenuProps['items'] => {
  const translate = useTranslate();

  return navItemsConfigs?.map((navItem: SideNavItem) => ({
    key: navItem.id,
    icon: navItem.icon,
    label: translate(navItem.nameKey),
    ...(navItem?.childPaths && {
      children: navItem.childPaths.map((subItem: SideNavItem) => ({
        key: subItem.id,
        label: translate(subItem.nameKey)
      }))
    })
  }));
};
