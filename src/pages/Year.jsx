import React from 'react';
import { useParams, Link } from 'react-router-dom';
import LessonCard from '../components/LessonCard';

// Datos de ejemplo
const WEEK_COUNT = 10;
const weeks = Array.from({ length: WEEK_COUNT }, (_, i) => ({
  weekNumber: `week${String(i + 1).padStart(2, '0')}`,
  title: `Semana ${i + 1}: Título del Módulo`,
  description: `Breve descripción de los temas cubiertos en la Semana ${i + 1}.`
}));


const Year = () => {
  // Obtiene el número del año de la URL
  const { yearNumber } = useParams();

  return (
    <div>
      <h1 className="my-4">Año de Estudio {yearNumber}</h1>
      
      {/* Grilla responsiva de Bootstrap: 1 columna en móvil, 2 en tablet, 3 en desktop */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {weeks.map((week) => (
          
          <div key={week.weekNumber} className="col"> 
            <Link 
              to={`/year/${yearNumber}/week/${week.weekNumber}`} 
              className="text-decoration-none d-block h-100" // d-block h-100 asegura que Link ocupe el espacio de la tarjeta
            >
              <LessonCard 
                title={week.title} 
                description={week.description} 
              /> 
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Year;