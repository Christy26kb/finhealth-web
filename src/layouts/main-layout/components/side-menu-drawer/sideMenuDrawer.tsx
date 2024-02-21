import { useNavigate } from 'react-router-dom';
import useTranslate from '@hooks/intl';
import { Avatar, Button, Divider, Drawer } from 'antd';
import {
  removeAccessToken,
  removeRefreshToken
} from '@features/authentication/utils/utils';
import { AUTH } from '@constants/routes';
import {
  EditOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectAppState } from '@slices/appSlice';
import colors from '../../../../../themes/colors';

interface SideMenuDrawerProps {
  onClose: () => void;
  isOpen: boolean;
}

const SideMenuDrawer = (props: SideMenuDrawerProps) => {
  const { onClose, isOpen } = props;
  const { currentUser } = useSelector(selectAppState);

  const translate = useTranslate();
  const navigate = useNavigate();

  const onLogout = () => {
    removeRefreshToken();
    removeAccessToken();
    navigate(AUTH.LOGIN);
  };

  const onEditUser = () => {};

  const onClickSettings = () => {};

  return (
    <Drawer
      placement="right"
      closable
      onClose={onClose}
      open={isOpen}
      styles={{
        content: {
          borderBottomLeftRadius: 15,
          borderTopLeftRadius: 15
        }
      }}
    >
      <div className="flex size-full flex-col justify-between">
        <div className="top-section">
          <div className="user-section flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <Avatar
                size={52}
                shape="square"
                icon={<UserOutlined />}
                style={{ backgroundColor: colors.primary }}
              />
              {currentUser?.email && (
                <div className="user-info-section ml-2 flex-col">
                  <div className="text-h6 ">{currentUser.name}</div>
                  <div className="mb-2">{currentUser.email}</div>
                </div>
              )}
            </div>
            <EditOutlined className="cursor-pointer" onClick={onEditUser} />
          </div>
          <Divider />
        </div>
        <div className="center-section size-full">
          <Button
            type="text"
            className="flex h-[40px] w-full flex-row items-center"
            onClick={onClickSettings}
          >
            <div className="mr-2">
              <SettingOutlined />
            </div>
            <div>{translate('sideDrawer.center.settings')}</div>
          </Button>
        </div>
        <div className="bottom-section w-full">
          <Divider />
          <Button
            type="text"
            className="item-center flex w-full justify-center"
            onClick={onLogout}
          >
            <div className="mr-5">
              <LogoutOutlined />
            </div>
            <div>{translate('sideDrawer.footer.logout')}</div>
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default SideMenuDrawer;
