import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router.jsx';
import GlobalStyles from './GlobalStyles.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Router />
  </React.StrictMode>,
);
