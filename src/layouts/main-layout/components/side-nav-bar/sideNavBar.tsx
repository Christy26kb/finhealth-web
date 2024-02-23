import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import AppLogoIcon from '@assets/logo/finhealth_full_logo_filled.png';
import { SideNavItem } from '@types';
import { HOME } from '@constants/routes';
import {
  SideNavItems,
  useMapSideNavConfigToMenuItems,
  getActiveMenuItem,
  getNavItemById
} from './sideBarConfig';

import '../../styles.css';

const { Sider } = Layout;

const SideNavBar = () => {
  const { pathname: currentPath } = useLocation();
  const navigate = useNavigate();
  const [isSideBarCollapsed, setIsCollapsed] = useState(false);

  const sideMenuItems = useMapSideNavConfigToMenuItems(SideNavItems);
  const activeMenuItem = useMemo(
    () => getActiveMenuItem(currentPath, SideNavItems),
    [currentPath]
  );
  // Note: If there is subItem it means a child is active else the parent.
  const selectedMenuItemKey = [
    activeMenuItem.subItem?.id || activeMenuItem.parentItem?.id || ''
  ];

  const handleNavigate = (menuItemInfo: any) => {
    const navItem: SideNavItem | null = getNavItemById(
      menuItemInfo.key,
      SideNavItems
    );
    if (navItem?.path) navigate(navItem.path);
  };

  const onAppLogoClick = () => navigate(HOME.HOME);

  return (
    <Sider
      theme="light"
      width={250}
      className={`side-nav-bar ${
        isSideBarCollapsed ? 'side-nav-bar-collapsed' : ''
      }`}
      collapsible
      onCollapse={setIsCollapsed}
    >
      <div
        role="presentation"
        className="flex cursor-pointer items-center justify-center"
        onClick={onAppLogoClick}
      >
        <img src={AppLogoIcon} alt="app-logo-pic" className="app-logo-icon" />
      </div>
      <Menu
        mode="inline"
        selectedKeys={selectedMenuItemKey}
        className="side-menu"
        items={sideMenuItems}
        onClick={handleNavigate}
      />
    </Sider>
  );
};

export default SideNavBar;
