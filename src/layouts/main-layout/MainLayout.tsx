import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { Spin, Layout } from 'antd';
import { AUTH } from '@constants/routes';
import { getAccessToken } from '@features/authentication/utils/utils';
import { useLazyGetCurrentUserQuery } from '@features/users/queries/UsersQuery';
import { setCurrentUser } from '@slices/appSlice';
import SideNavBar from './components/side-nav-bar/sideNavBar';
import MainHeader from './components/main-header/MainHeader';

const { Content } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [getCurrentUser] = useLazyGetCurrentUserQuery();

  const initiateCurrentUser = async () => {
    const response = await getCurrentUser();
    if (response.data)
      dispatch(
        setCurrentUser({
          user: response.data
        })
      );
  };

  useEffect(() => {
    initiateCurrentUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const accessToken = getAccessToken();
    if (!accessToken) navigate(AUTH.LOGIN);
  }, [navigate]);

  return (
    <Layout className="flex size-full h-screen w-screen overflow-hidden">
      <SideNavBar />
      <Layout>
        <MainHeader />
        <Layout>
          <Content className="bg-white">
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
    </Layout>
  );
};

export default MainLayout;
