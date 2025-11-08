// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// 1. Importación del CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; 
// 2. Importación del JavaScript de Bootstrap (para el menú responsivo, modales, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // 🔑 CLAVE: Activa el JS de responsividad

// Importa tu hoja de estilos personalizada
import './index.css'; 


// Punto de montaje de la aplicación
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);