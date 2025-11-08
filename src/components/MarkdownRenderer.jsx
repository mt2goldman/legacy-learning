// src/components/MarkdownRenderer.jsx

import React from 'react';
import ReactMarkdown from 'react-markdown'; // Asegúrate de que react-markdown está instalado

/**
 * Componente que renderiza texto en formato Markdown.
 */
const MarkdownRenderer = ({ markdownText }) => {
  return (
    <div className="markdown-content">
      <ReactMarkdown>
        {markdownText}
      </ReactMarkdown>
    </div>
  );
};

// ⚠️ Esta línea es CRÍTICA. Sin ella, la importación falla.
export default MarkdownRenderer;