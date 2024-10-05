import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot instead of ReactDOM
import App from './App';

const container = document.getElementById('root') as HTMLElement; // Find the root element
const root = createRoot(container); // Create a root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); // Use root.render instead of ReactDOM.render

