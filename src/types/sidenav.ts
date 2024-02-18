import { ReactNode } from 'react';

export type SideNavItem = {
  id: string;
  nameKey: string;
  path: string;
  icon?: string | ReactNode;
  permissions?: string[];
  childPaths?: SideNavItem[];
};
