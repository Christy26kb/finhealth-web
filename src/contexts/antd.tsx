import { ReactNode } from 'react';
import { ConfigProvider, App } from 'antd';
import colors from '../../themes/colors';

type AntdAppProviderProps = {
  children: ReactNode;
};

const antdConfigs = {
  theme: {
    token: {
      colorPrimary: colors.primary
    }
  }
};

const AntdAppProvider = ({ children }: AntdAppProviderProps) => (
  <ConfigProvider theme={antdConfigs.theme}>
    <App>{children}</App>
  </ConfigProvider>
);

export default AntdAppProvider;
