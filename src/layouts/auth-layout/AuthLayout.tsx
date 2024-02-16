import { Suspense, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Spin } from 'antd';

import AuthLayoutImage from '@assets/images/auth_layout.svg';
import { getFromLocalStorage } from '@utils/generic-utils';
import { HOME_PAGE } from '@constants/routes';

const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect users to Home page if already logged-in.
    if (getFromLocalStorage('access_token')) navigate(HOME_PAGE.HOME);
  }, [navigate]);

  return (
    <div className="flex h-screen items-center">
      <Suspense
        fallback={
          <div className="flex size-full items-center justify-center">
            <Spin />
          </div>
        }
      >
        <section className="flex h-full justify-center align-middle sm:w-1/3 md:w-1/2">
          <img src={AuthLayoutImage} alt="login-layout-pic" className="w-2/3" />
        </section>
        <section className="flex size-full items-center justify-center sm:w-2/3 md:w-1/2">
          <div className="m-6 ml-20 flex size-full flex-col items-center justify-center">
            <div className="mb-10">
              {/* <AppLogo className="mx-auto h-9" /> */}
            </div>
            <Outlet />
          </div>
        </section>
      </Suspense>
    </div>
  );
};

export default AuthLayout;
