import React from 'react';

import { AppRoutes } from 'routing/AppRoutes';

export const App = () => {
  return (
    <>
      <AppRoutes />
      {/* TODO: Add other global used components here which can be called through context api like modal dialogs */}
    </>
  );
};
