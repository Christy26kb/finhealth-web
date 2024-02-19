import { Suspense, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Spin, Layout } from 'antd';
import { getFromLocalStorage } from '@utils/generic-utils';
import { AUTH } from '@constants/routes';
import BreadCrumbs from './components/breadcrumbs/Breadcrumbs';
import SideNavBar from './components/side-nav-bar/sideNavBar';

const { Content } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = getFromLocalStorage('access_token');
    if (!accessToken) navigate(AUTH.LOGIN);
  }, [navigate]);

  return (
    <Layout className="flex size-full h-screen w-screen overflow-hidden">
      <SideNavBar />
      <Layout style={{ padding: '0 24px 24px' }}>
        <BreadCrumbs />
        <Content>
          <Suspense
            fallback={
              <div className="flex size-full items-center justify-center">
                <Spin />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
