import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import { HOME } from '@constants/routes';

const HomePage = lazy(() => import('@features/home/pages/home/Home'));

export const HomeRoutes: RouteObject[] = [
  {
    path: HOME.HOME,
    element: <HomePage />
  }
];

export default HomeRoutes;
