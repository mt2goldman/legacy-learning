// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa los componentes de la estructura
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importa las páginas
import Home from './pages/Home';
import About from './pages/About';
import Syllabus from './pages/Syllabus'; // Esta ya carga el contenido .md
// Importaremos Year y Week en pasos posteriores

function App() {
  return (
    <Router>
      <Navbar /> 
      
      {/* 🔑 CLAVE: El div principal envuelve las rutas. Usamos 'container' para centrar
         y aplicar márgenes responsivos, y 'min-vh-100' para asegurar que el contenido 
         ocupe al menos el 100% del alto de la ventana. */}
      <div className="container min-vh-100">
        <Routes>
          {/* Todas las rutas van aquí */}
          <Route path="/" element={<Home />} /> 
          <Route path="/syllabus" element={<Syllabus />} /> 
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;