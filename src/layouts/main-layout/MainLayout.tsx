import { Outlet } from 'react-router-dom';

const MainLayout = () => (
  <div className="flex h-screen w-screen overflow-hidden">
    <div className="h-full overflow-y-scroll bg-white pb-[70px]">
      <Outlet />
    </div>
  </div>
);

export default MainLayout;
