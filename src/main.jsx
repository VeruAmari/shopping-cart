import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router.jsx';

import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
  html {
    --color-1: #333745;
    --color-2: #E63462;
    --color-3: #D4C2FC;
    --color-4: #C7EFCF;
    --color-5: #EEF5DB;

    --light-background: var(--color-5);
    --dark-background: var(--color-1);
    
  };
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Router />
  </React.StrictMode>,
);
