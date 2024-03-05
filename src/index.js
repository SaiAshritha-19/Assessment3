import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your global CSS styles
import App from './App'; // Import your main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This is the root HTML element in your index.html file
);
