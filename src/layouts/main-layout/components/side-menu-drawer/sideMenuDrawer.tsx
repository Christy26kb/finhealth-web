import { useNavigate } from 'react-router-dom';
import useTranslate from '@hooks/intl';
import { Button, Divider, Drawer } from 'antd';
import {
  removeAccessToken,
  removeRefreshToken
} from '@features/authentication/utils/utils';
import { AUTH } from '@constants/routes';
import { LogoutOutlined } from '@ant-design/icons';

interface SideMenuDrawerProps {
  onClose: () => void;
  isOpen: boolean;
}

const SideMenuDrawer = (props: SideMenuDrawerProps) => {
  const { onClose, isOpen } = props;

  const translate = useTranslate();
  const navigate = useNavigate();

  const onLogout = () => {
    removeRefreshToken();
    removeAccessToken();
    navigate(AUTH.LOGIN);
  };

  return (
    <Drawer
      placement="right"
      closable={false}
      onClose={onClose}
      open={isOpen}
      styles={{
        content: {
          borderBottomLeftRadius: 15,
          borderTopLeftRadius: 15
        }
      }}
    >
      <div className="flex size-full flex-col items-center justify-between">
        <div className="top-section">Top</div>
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
