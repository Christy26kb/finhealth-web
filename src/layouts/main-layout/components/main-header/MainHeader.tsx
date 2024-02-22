import { useState } from 'react';
import { Layout, Button, Badge } from 'antd';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
import SideMenuDrawer from '../side-menu-drawer/sideMenuDrawer';
import colors from '../../../../../themes/colors';
import BreadCrumbs from '../breadcrumbs/Breadcrumbs';

const { Header } = Layout;

const MainHeader = () => {
  const [isSideDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleSideDrawer = () => setIsDrawerOpen((prevValue) => !prevValue);

  const onClickAppNotifications = () => {};

  return (
    <Header
      style={{
        borderBottom: `1px solid ${colors.boderGrey}`
      }}
      className="flex h-[65px] items-center bg-white p-0"
    >
      <div className="main-header-content flex size-full items-center justify-between px-6">
        <div className="main-nav-breadcrumbs">
          <BreadCrumbs />
        </div>
        <div className="main-actions-section flex items-center justify-center">
          <Badge count={5} overflowCount={5}>
            <div className="flex items-center justify-center">
              <Button
                type="default"
                icon={<BellOutlined />}
                onClick={onClickAppNotifications}
              />
            </div>
          </Badge>
          <div className="ml-4 flex items-center justify-center">
            <Button
              type="default"
              icon={<UserOutlined />}
              onClick={toggleSideDrawer}
            />
          </div>
        </div>
      </div>
      <SideMenuDrawer onClose={toggleSideDrawer} isOpen={isSideDrawerOpen} />
    </Header>
  );
};

export default MainHeader;
