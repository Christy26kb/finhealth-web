import { RouteObject } from 'react-router-dom';

import { PROFILE } from '@constants/routes';

export const ProfileRoutes: RouteObject = {
  path: PROFILE.PROFILES,
  children: [
    { path: '', element: <div>Profile List</div> },
    { path: PROFILE.CREATE_PROFILE, element: <div>Profile Create</div> },
    { path: PROFILE.EDIT_PROFILE, element: <div>Profile Edit</div> }
  ]
};

export default ProfileRoutes;
