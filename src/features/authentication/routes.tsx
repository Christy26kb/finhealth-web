import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import AuthLayout from '@layouts/auth-layout/AuthLayout';
import { AUTH } from '@constants/routes';

const LoginPage = lazy(
  () => import('@features/authentication/pages/login/Login')
);

const SignupPage = lazy(
  () => import('@features/authentication/pages/signup/Signup')
);

export const AuthRoutes: RouteObject = {
  element: <AuthLayout />, // Outlet in AuthLayout will be replaced by matching element from below
  children: [
    { path: AUTH.LOGIN, element: <LoginPage /> },
    { path: AUTH.REGISTER, element: <SignupPage /> }
  ]
};

export default AuthRoutes;
