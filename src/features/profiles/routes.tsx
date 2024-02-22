import { RouteObject } from 'react-router-dom';

import { PROFILE } from '@constants/routes';
import ProfilesList from './pages/profiles-list/ProfilesList';

export const ProfileRoutes: RouteObject = {
  path: PROFILE.PROFILES,
  children: [
    { path: '', element: <ProfilesList /> },
    { path: PROFILE.CREATE_PROFILE, element: <div>Profile Create</div> },
    { path: PROFILE.EDIT_PROFILE, element: <div>Profile Edit</div> }
  ]
};

export default ProfileRoutes;
