// src/pages/Devices.jsx
import React from 'react';
import PageContainer from '../components/PageContainer/PageContainer';
import './Pages.css'; // opcional

const Devices = () => {
  return (
    <PageContainer title="Devices">
      <div className="cards-grid">
        <div className="card">Active: 20</div>
        <div className="card">Alerts: 15</div>
        <div className="card">Users: 4</div>
      </div>
      <div className="chart">
        <h3>Sensor Monitoring</h3>
        {/* Aquí puedes integrar una librería de gráficos o solo un placeholder */}
        <img src="/path-to-chart-image.png" alt="Gráfico" />
      </div>
    </PageContainer>
  );
};

export default Devices;