import { useState } from 'react';
import { Layout, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SideMenuDrawer from '../side-menu-drawer/sideMenuDrawer';
import colors from '../../../../../themes/colors';

const { Header } = Layout;

const MainHeader = () => {
  const [isSideDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleSideDrawer = () => setIsDrawerOpen((prevValue) => !prevValue);

  return (
    <Header
      style={{
        borderBottom: `1px solid ${colors.boderGrey}`
      }}
      className="flex h-[65px] items-center bg-white p-0"
    >
      <div className="flex size-full items-center justify-between px-6">
        <div>Title</div>
        <div className="flex items-center justify-center">
          <Button
            type="default"
            icon={<UserOutlined />}
            onClick={toggleSideDrawer}
          />
        </div>
      </div>
      <SideMenuDrawer onClose={toggleSideDrawer} isOpen={isSideDrawerOpen} />
    </Header>
  );
};

export default MainHeader;
