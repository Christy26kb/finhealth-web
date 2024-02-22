import React, { useMemo } from 'react';
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
import { ActiveNavItem, SideNavItem } from '@types';
import { MenuProps } from 'antd';
import {
  HomeOutlined,
  UsergroupAddOutlined,
  GroupOutlined
} from '@ant-design/icons';

export const SideNavItems: SideNavItem[] = [
  {
    id: 'home',
    nameKey: 'sideNav.home.title',
    path: HOME.HOME,
    icon: React.createElement(HomeOutlined),
    permissions: [UserPermissionTypes.VIEW_HOME],
    showSubMenuItems: false
  },
  {
    id: 'profiles',
    nameKey: 'sideNav.profiles.title',
    path: PROFILE.PROFILES,
    icon: React.createElement(UsergroupAddOutlined),
    permissions: [UserPermissionTypes.VIEW_PROFILES],
    showSubMenuItems: false,
    childPaths: [
      // Just to map these paths are sub routes of the parent
      {
        id: '',
        nameKey: '',
        path: PROFILE.CREATE_PROFILE,
        permissions: [UserPermissionTypes.VIEW_PROFILES]
      },
      {
        id: '',
        nameKey: '',
        path: PROFILE.EDIT_PROFILE,
        permissions: [UserPermissionTypes.VIEW_PROFILES]
      }
    ]
  },
  {
    id: 'finance_management',
    nameKey: 'sideNav.finance_management.title',
    path: '',
    icon: React.createElement(GroupOutlined),
    showSubMenuItems: true,
    childPaths: [
      {
        id: 'incomes',
        nameKey: 'sideNav.finance_management.menu_items.incomes.title',
        path: INCOME.INCOMES,
        permissions: [UserPermissionTypes.VIEW_INCOMES],
        showSubMenuItems: false,
        childPaths: [
          // Just to map these paths are sub routes of the parent
          {
            id: '',
            nameKey: '',
            path: INCOME.CREATE_INCOME,
            permissions: [UserPermissionTypes.VIEW_INCOMES]
          },
          {
            id: '',
            nameKey: '',
            path: INCOME.EDIT_INCOME,
            permissions: [UserPermissionTypes.VIEW_INCOMES]
          }
        ]
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

  return useMemo(
    () =>
      navItemsConfigs?.map((navItem: SideNavItem) => ({
        key: navItem.id,
        icon: navItem.icon,
        label: translate(navItem.nameKey),
        ...(navItem?.showSubMenuItems &&
          navItem?.childPaths && {
            children: navItem.childPaths.map((subItem: SideNavItem) => ({
              key: subItem.id,
              label: subItem.nameKey ? translate(subItem.nameKey) : ''
            }))
          })
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [navItemsConfigs]
  );
};

export const getActiveMenuItem = (
  pathname: string,
  sideNavItems: SideNavItem[]
): ActiveNavItem => {
  const idDelimiter = ':';
  // Note: Returning Sub item and Parent item if the macthed one is a child.
  const activeItem: ActiveNavItem = { subItem: null, parentItem: null };

  sideNavItems?.forEach((navItem: SideNavItem) => {
    if (navItem.path === pathname) {
      // Note: Matching the first level pathname
      activeItem.parentItem = navItem;
    } else if (navItem?.childPaths) {
      // Note: Matching the childpaths.
      navItem.childPaths.forEach((subItem: SideNavItem) => {
        if (subItem.path === pathname) {
          // Note: Matching the exact pathname.
          activeItem.subItem = subItem;
          activeItem.parentItem = navItem;
        } else {
          // Note: Matching dynamic id included sub item pathnames.
          // Note: Assuming there's only one dynamic id present in pathname.
          const idOmittedSubItemPath = subItem.path?.split(idDelimiter)?.[0];
          if (pathname?.includes(idOmittedSubItemPath)) {
            activeItem.subItem = subItem;
            activeItem.parentItem = navItem;
          }
        }
      });
    }
  });

  return activeItem;
};

export const getNavItemById = (
  navItemId: string,
  sideNavItems: SideNavItem[]
): SideNavItem | null => {
  let selectedNavItem = null;
  sideNavItems.forEach((navItem: SideNavItem) => {
    if (navItem.id === navItemId) {
      selectedNavItem = navItem;
    } else if (navItem.childPaths) {
      navItem.childPaths.forEach((subNavItem: SideNavItem) => {
        if (subNavItem.id === navItemId) {
          selectedNavItem = subNavItem;
        }
      });
    }
  });
  return selectedNavItem;
};
