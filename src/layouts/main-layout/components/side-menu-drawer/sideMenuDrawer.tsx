import { Drawer } from 'antd';

interface SideMenuDrawerProps {
  onClose: () => void;
  isOpen: boolean;
}

const SideMenuDrawer = (props: SideMenuDrawerProps) => {
  const { onClose, isOpen } = props;

  return (
    <Drawer placement="right" closable={false} onClose={onClose} open={isOpen}>
      {/*  */}
    </Drawer>
  );
};

export default SideMenuDrawer;
