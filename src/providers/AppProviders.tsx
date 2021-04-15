import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ErrorBoundary } from 'app/errorBoundary/ErrorBoundary';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ErrorBoundary>
    <Router>{children}</Router>
  </ErrorBoundary>
);
