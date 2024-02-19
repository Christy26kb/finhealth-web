import { Navigate, RouteObject } from 'react-router-dom';

import MainLayout from '@layouts/main-layout/MainLayout';
import { HOME, ACCESS_DENIED } from '@constants/routes';

import AuthRoutes from '@features/authentication/routes';
import HomeRoutes from '@features/home/routes';
import ProfileRoutes from '@features/profiles/routes';
import IncomeRoutes from '@features/incomes/routes';

import AccessDenied from '@components/access-denied/AccessDenied';

const protectedRoutes: RouteObject[] = [
  AuthRoutes,
  {
    path: '/', // Re-route from '/' to '/home'
    element: <Navigate to={HOME.HOME} />
  },
  {
    element: <MainLayout />, // Outlet in MainLayout will be replaced by matching element from below
    children: [
      {
        path: ACCESS_DENIED,
        element: <AccessDenied />
      },
      ...HomeRoutes,
      ProfileRoutes,
      IncomeRoutes
    ]
  },
  {
    path: '*', // Re-route '*' routes except above to '/home'
    element: <Navigate to={HOME.HOME} />
  }
];

export default protectedRoutes;
