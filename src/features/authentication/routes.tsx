import { RouteObject } from 'react-router-dom';

import AuthLayout from '@layouts/auth-layout/AuthLayout';
import { AUTH } from '@constants/routes';

export const AuthRoutes: RouteObject = {
  element: <AuthLayout />, // Outlet in AuthLayout will be replaced by matching element from below
  children: [
    { path: AUTH.REGISTER, element: <div>Register</div> },
    { path: AUTH.LOGIN, element: <div>Login</div> }
  ]
};

export default AuthRoutes;
