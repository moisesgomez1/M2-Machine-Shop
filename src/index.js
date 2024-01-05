import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './styles.css';
import store from './store.js';

const root = createRoot(document.querySelector('#root'));
root.render(<Provider store={store}>
  <App />
</Provider>
);
