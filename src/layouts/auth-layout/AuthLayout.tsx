import { Outlet } from 'react-router-dom';

const AuthLayout = () => (
  <div className="flex h-screen items-center">
    Auth Layout
    <Outlet />
  </div>
);

export default AuthLayout;
