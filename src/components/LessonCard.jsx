// src/components/LessonCard.jsx

import React from 'react';

const LessonCard = ({ title, description }) => {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title text-primary">{title}</h5>
        <p className="card-text text-muted">{description}</p>
        <span className="btn btn-sm btn-outline-primary mt-2">Ver Lección</span>
      </div>
    </div>
  );
};

export default LessonCard;