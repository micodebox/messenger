import React from 'react';
import ReactDOM from 'react-dom';

import { AppProviders } from 'providers/AppProviders';
import { App } from 'app/App';

import * as serviceWorker from './serviceWorker';

const app = (
  <AppProviders>
    <App />
  </AppProviders>
);

const root = document.getElementById('root');

ReactDOM.render(app, root);

serviceWorker.unregister();
