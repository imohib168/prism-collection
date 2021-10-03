import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { CollectionProvider } from './Context/globalContext';

ReactDOM.render(
  <CollectionProvider>
    <App />
  </CollectionProvider>,
  document.getElementById('root')
);
