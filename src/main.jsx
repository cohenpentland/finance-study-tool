import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Surface any startup error on-screen instead of failing to a blank page.
function showFatal(err) {
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML =
      '<div style="max-width:640px;margin:48px auto;padding:24px;font-family:sans-serif;color:#fca5a5">' +
      '<h1 style="font-size:18px">Something went wrong loading the study tool</h1>' +
      '<pre style="white-space:pre-wrap;color:#94a3b8;font-size:12px">' +
      String(err && err.stack ? err.stack : err) +
      '</pre></div>';
  }
}

window.addEventListener('error', (e) => showFatal(e.error || e.message));

try {
  createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (err) {
  showFatal(err);
}
