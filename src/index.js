import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
<<<<<<< HEAD
=======
import { BrowserRouter as Router } from 'react-router-dom'; // Importa el Router
import './estilosApp/index.css';
import reportWebVitals from './reportWebVitals';
>>>>>>> main


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
