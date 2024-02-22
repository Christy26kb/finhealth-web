import { useMemo } from 'react';
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

const { Sider } = Layout;

const SideNavBar = () => {
  const { pathname: currentPath } = useLocation();
  const navigate = useNavigate();

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
      style={{ background: '', borderRight: '1px solid #f0f0f0' }}
      collapsible
    >
      <div
        role="presentation"
        className="flex cursor-pointer items-center justify-center"
        onClick={onAppLogoClick}
      >
        <img
          src={AppLogoIcon}
          alt="app-logo-pic"
          style={{
            padding: 10,
            borderRadius: 15
          }}
        />
      </div>
      <Menu
        mode="inline"
        selectedKeys={selectedMenuItemKey}
        style={{
          height: 'calc(100% - 238px)',
          borderRight: 0,
          overflow: 'auto'
        }}
        items={sideMenuItems}
        onClick={handleNavigate}
      />
    </Sider>
  );
};

export default SideNavBar;
