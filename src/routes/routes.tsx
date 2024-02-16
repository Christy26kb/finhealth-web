import { Navigate, RouteObject } from 'react-router-dom';

import MainLayout from '@layouts/main-layout/MainLayout';
import { HOME_PAGE } from '@constants/routes';

import AuthRoutes from '@features/authentication/routes';
import HomeRoutes from '@features/home/routes';

const protectedRoutes: RouteObject[] = [
  AuthRoutes,
  {
    path: '/', // Re-route from '/' to '/home'
    element: <Navigate to={HOME_PAGE.HOME} />
  },
  {
    element: <MainLayout />, // Outlet in MainLayout will be replaced by matching element from below
    children: [...HomeRoutes]
  },
  {
    path: '*', // Re-route '*' routes except above to '/home'
    element: <Navigate to={HOME_PAGE.HOME} />
  }
];

export default protectedRoutes;
