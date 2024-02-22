import { SideNavItem } from '@types';
import { ReactNode } from 'react';

import { HOME } from '@constants/routes';
import { HomeOutlined } from '@ant-design/icons';
import { getActiveMenuItem } from '../side-nav-bar/sideBarConfig';

export type BreadCrumbItem = {
  id: string;
  path: string;
  icon?: ReactNode | '';
  title: string;
  disabled?: boolean;
};

const HomeBreadcrumbItem: BreadCrumbItem = {
  id: 'home',
  path: HOME.HOME,
  icon: <HomeOutlined />,
  title: 'sideNav.home.title'
};

export const getBreadcrumbItems = (
  path: string,
  sideNavItems: SideNavItem[]
): BreadCrumbItem[] => {
  const breadCrumbItems: BreadCrumbItem[] = [];
  const { subItem, parentItem } = getActiveMenuItem(path, sideNavItems);
  if (parentItem)
    breadCrumbItems.push({
      id: parentItem.id,
      path: parentItem.path,
      icon: parentItem.icon,
      title: parentItem.nameKey
    });
  if (subItem)
    breadCrumbItems.push({
      id: subItem.id,
      path: subItem.path,
      icon: subItem.icon,
      title: subItem.nameKey
    });

  if (
    breadCrumbItems.length === 0 ||
    breadCrumbItems?.[0]?.id !== HomeBreadcrumbItem.id
  )
    breadCrumbItems.unshift(HomeBreadcrumbItem);

  return breadCrumbItems;
};
