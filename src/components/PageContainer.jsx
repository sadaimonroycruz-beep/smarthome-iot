// src/components/PageContainer/PageContainer.jsx
import React from 'react';
import './PageContainer.css'; // opcional, para estilos

const PageContainer = ({ title, children }) => {
  return (
    <div className="page-container">
      <h1>{title}</h1>
      <div className="page-content">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;


