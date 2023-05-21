import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import { AuthProvider } from './context/AuthProvider';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
