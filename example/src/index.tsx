import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const elem = document.getElementById('root');
if (elem) {
  const root = ReactDOM.createRoot(elem);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
