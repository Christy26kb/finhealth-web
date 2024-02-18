import { Layout } from 'antd';

const { Header } = Layout;

const MainHeader = () => (
  <Header
    style={{
      display: 'flex',
      alignItems: 'center',
      background: 'white',
      borderBottom: '1px solid #f0f0f0'
    }}
  >
    {/* <img src={AppLogo} alt="app-logo-pic" className="w-[250px]" /> */}
  </Header>
);

export default MainHeader;
