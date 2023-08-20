import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ChartDataProvider } from './store/ChartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChartDataProvider>
    <App />
  </ChartDataProvider>
);

