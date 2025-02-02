import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App_fashion';

import './../src/styles/reset.css';
import './../src/styles/common.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);