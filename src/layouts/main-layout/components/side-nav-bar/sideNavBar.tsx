import { Layout, Menu, Card, Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import {
  UserSwitchOutlined,
  EllipsisOutlined,
  SettingOutlined
} from '@ant-design/icons';
import AppLogo from '@assets/logo/finhealth_full_logo.png';
import {
  SideNavItems,
  MoreActionsMenuItems,
  useMapSideNavConfigToMenuItems
} from './sideBarConfig';

const { Sider } = Layout;

const moreActionsMenuItems: MenuProps['items'] = [...MoreActionsMenuItems];

const SideNavBar = () => {
  const sideMenuItems = useMapSideNavConfigToMenuItems(SideNavItems);
  const profilesActionMenuItems: MenuProps['items'] = [];

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
      menu={{ items: moreActionsMenuItems }}
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
      width={350}
      style={{ background: '', borderRight: '1px solid #f0f0f0' }}
    >
      <Card
        style={{ margin: 10 }}
        cover={<img src={AppLogo} alt="app-logo-pic" style={{ padding: 20 }} />}
        actions={sideBarActionItems}
      >
        Welcome, Christy
      </Card>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{
          height: 'calc(100% - 345px)',
          borderRight: 0,
          overflow: 'auto'
        }}
        items={sideMenuItems}
      />
    </Sider>
  );
};

export default SideNavBar;
