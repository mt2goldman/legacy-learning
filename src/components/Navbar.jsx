// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    // CAMBIO: Aseguramos el color del navbar
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
      <div className="container-fluid container">
        
        <Link className="navbar-brand" to="/">Legacy Learning</Link>
        
        {/* 1. Botón Toggler: Es clave para el móvil */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 2. Div Colapsable: Contiene los enlaces */}
        {/* CAMBIO: Usamos 'collapse navbar-collapse' y el ID 'navbarNav' */}
        <div className="collapse navbar-collapse" id="navbarNav">
          
          {/* 3. Lista de Enlaces (ul) */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
            
            <li className="nav-item">
              {/* CAMBIO: Usamos 'nav-link' */}
              <Link className="nav-link" to="/">Inicio</Link> 
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/syllabus">Syllabus</Link> 
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/about">Acerca de</Link>
            </li>
            
          </ul>
        </div> 
      </div>
    </nav>
  );
};

export default Navbar;