import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu, Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import {
  UserSwitchOutlined,
  EllipsisOutlined,
  SettingOutlined
} from '@ant-design/icons';
import AppLogoIcon from '@assets/logo/finhealth_full_logo_filled.png';
import { SideNavItem } from '@types';
import { AUTH, HOME } from '@constants/routes';
import {
  removeAccessToken,
  removeRefreshToken
} from '@features/authentication/utils/utils';
import {
  SideNavItems,
  MoreActionsMenuItems,
  useMapSideNavConfigToMenuItems,
  getActiveMenuItem,
  getNavItemById
} from './sideBarConfig';

const { Sider } = Layout;

const moreActionsMenuItems: MenuProps['items'] = [...MoreActionsMenuItems];

const SideNavBar = () => {
  const { pathname: currentPath } = useLocation();
  const navigate = useNavigate();

  const sideMenuItems = useMapSideNavConfigToMenuItems(SideNavItems);
  const profilesActionMenuItems: MenuProps['items'] = [];
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

  const onLogout = () => {
    removeRefreshToken();
    removeAccessToken();
    navigate(AUTH.LOGIN);
  };

  const onAppLogoClick = () => navigate(HOME.HOME);

  const onClickMoreActionItem = (actionItem: any) => {
    if (actionItem.key === 'logout') onLogout();
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sideBarActionItems = [
    <Button
      key="settings"
      type="default"
      shape="round"
      icon={<SettingOutlined />}
      style={{ padding: 2, border: 'none', boxShadow: 'none' }}
      size="small"
    >
      Settings
    </Button>,
    <Dropdown
      key="profiles"
      menu={{
        items: profilesActionMenuItems,
        selectable: true,
        defaultSelectedKeys: ['1']
      }}
      trigger={['click']}
      overlayStyle={{ minWidth: 150 }}
      placement="bottom"
      arrow
    >
      <Button
        type="default"
        shape="round"
        icon={<UserSwitchOutlined />}
        style={{ padding: 2, border: 'none', boxShadow: 'none' }}
        size="small"
      >
        Profiles
      </Button>
    </Dropdown>,
    <Dropdown
      key="more-actions"
      menu={{ items: moreActionsMenuItems, onClick: onClickMoreActionItem }}
      trigger={['click']}
      overlayStyle={{ minWidth: 150 }}
      placement="bottom"
      arrow
    >
      <Button
        type="default"
        shape="round"
        icon={<EllipsisOutlined />}
        style={{ padding: 2, border: 'none', boxShadow: 'none' }}
        size="small"
      >
        More
      </Button>
    </Dropdown>
  ];

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
          height: 'calc(100% - 345px)',
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
