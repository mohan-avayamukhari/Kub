import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import { BrowserRouter } from "react-router-dom"

const root = createRoot(document.getElementById('root')); root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)