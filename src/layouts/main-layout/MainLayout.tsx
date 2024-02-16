import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Spin } from 'antd';

const MainLayout = () => (
  <div className="flex h-screen w-screen overflow-hidden">
    <div className="size-full overflow-y-scroll bg-white">
      <Suspense
        fallback={
          <div className="flex size-full items-center justify-center">
            <Spin />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  </div>
);

export default MainLayout;
