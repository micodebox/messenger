import { ReactNode } from 'react';

import { Profile } from 'app/dashboard/Dashboard.types';

export type TopBarProps = {
  children?: ReactNode;
  currentUser: Profile;
};
