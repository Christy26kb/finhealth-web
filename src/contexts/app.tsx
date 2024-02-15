import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { store } from '../core/store';
import LocaleProvider from './locale';
import { ThemeProvider } from './theme';
import AntdAppProvider from './antd';

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => (
  <ThemeProvider>
    <Provider store={store}>
      <HelmetProvider>
        <LocaleProvider>
          <AntdAppProvider>
            <Router>{children}</Router>
          </AntdAppProvider>
        </LocaleProvider>
      </HelmetProvider>
    </Provider>
  </ThemeProvider>
);

export default AppProvider;
