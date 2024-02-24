import { RouteObject } from 'react-router-dom';

import { PROFILE } from '@constants/routes';
import ProfilesList from './pages/profiles-list/ProfilesList';
import ProfileEdit from './pages/profile-edit/ProfileEdit';

export const ProfileRoutes: RouteObject = {
  path: PROFILE.PROFILES,
  children: [
    { path: '', element: <ProfilesList /> },
    { path: PROFILE.CREATE_PROFILE, element: <ProfileEdit isEdit={false} /> },
    { path: PROFILE.EDIT_PROFILE, element: <ProfileEdit isEdit /> }
  ]
};

export default ProfileRoutes;
