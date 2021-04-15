import React from 'react';

import { TopBar } from 'components/molecules';
import { useAuthState } from 'hooks/useAuthState/useAuthState';

import { DashboardProps } from './Dashboard.types';

export const Dashboard = ({ children }: DashboardProps) => {
  const { user: currentUser } = useAuthState();

  return (
    <>
      <TopBar currentUser={currentUser} />
      {children}
    </>
  );
};
