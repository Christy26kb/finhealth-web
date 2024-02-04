import { Navigate, RouteObject } from 'react-router-dom';

import AuthRoutes from '@features/authentication/routes';
import MainLayout from '@layouts/main-layout/MainLayout';
import { HOME_PAGE } from '@constants/routes';

const protectedRoutes: RouteObject[] = [
  AuthRoutes,
  {
    path: '/',
    element: <Navigate to={HOME_PAGE.HOME} /> // Re-route from '/' to '/home'
  },
  {
    element: <MainLayout />, // Outlet in MainLayout will be replaced by matching element from below
    children: []
  }
];

export default protectedRoutes;
