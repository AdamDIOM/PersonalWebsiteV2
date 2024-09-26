import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import { ParallaxProvider } from 'react-scroll-parallax';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <Router />
    </ParallaxProvider>
  </React.StrictMode>
);