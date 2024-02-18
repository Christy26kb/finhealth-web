import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Spin, Layout } from 'antd';
import BreadCrumbs from './components/breadcrumbs/Breadcrumbs';
import SideNavBar from './components/side-nav-bar/sideNavBar';

const { Content } = Layout;

const MainLayout = () => (
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

export default MainLayout;
