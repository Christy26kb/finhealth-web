import React, { ReactNode } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ConfigProvider, App } from 'antd';

type AntdAppProviderProps = {
  children: ReactNode;
};

const AntdAppProvider = ({ children }: AntdAppProviderProps) => (
  <ConfigProvider>
    <App>{children}</App>
  </ConfigProvider>
);

export default AntdAppProvider;
