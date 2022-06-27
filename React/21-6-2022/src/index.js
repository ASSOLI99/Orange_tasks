import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Card from './Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const card = ReactDOM.createRoot(document.getElementById('card'));
card.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>
);



