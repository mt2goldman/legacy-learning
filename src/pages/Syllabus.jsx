// src/pages/Syllabus.jsx
import React, { useState, useEffect } from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';

const Syllabus = () => {
  const [syllabusContent, setSyllabusContent] = useState('Cargando índice...');
  // ... (Aquí iría la lógica fetch que ya tienes)
  
  return (
    <div className="syllabus-page">
      <h1>Programa de Estudios</h1>
      <MarkdownRenderer markdownText={syllabusContent} />
    </div>
  );
};

export default Syllabus;