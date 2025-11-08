// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-light text-center py-3 mt-5">
      <div className="container">
        <span className="text-muted">© {new Date().getFullYear()} Legacy Learning Project</span>
      </div>
    </footer>
  );
};

export default Footer;