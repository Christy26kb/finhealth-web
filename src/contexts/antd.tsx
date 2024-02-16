import { ReactNode } from 'react';
import { ConfigProvider, App } from 'antd';

type AntdAppProviderProps = {
  children: ReactNode;
};

const AntdAppProvider = ({ children }: AntdAppProviderProps) => (
  <ConfigProvider
    theme={{
      token: {}
    }}
  >
    <App>{children}</App>
  </ConfigProvider>
);

export default AntdAppProvider;
