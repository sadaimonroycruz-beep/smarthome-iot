import PageContainer from '../components/PageContainer';

function DevicesPage() {
  const devices = [
    { id: 1, name: 'Sensor de Gas', status: 'Activo', location: 'Cocina' },
    { id: 2, name: 'Termostato', status: 'Activo', location: 'Sala' },
    { id: 3, name: 'Cámara', status: 'Inactivo', location: 'Entrada' },
    { id: 4, name: 'Detector de Humo', status: 'Activo', location: 'Habitación' },
  ];

  return (
    <PageContainer title="Devices - Monroy Cruz Zuri Saday">
      <h2 style={styles.pageTitle}>Dispositivos Conectados</h2>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Nombre</th>
              <th style={styles.th}>Estado</th>
              <th style={styles.th}>Ubicación</th>
            </tr>
          </thead>
          <tbody>
            {devices.map(device => (
              <tr key={device.id}>
                <td style={styles.td}>{device.id}</td>
                <td style={styles.td}>{device.name}</td>
                <td style={styles.td}>
                  <span style={{
                    color: device.status === 'Activo' ? '#28a745' : '#dc3545',
                    fontWeight: 'bold'
                  }}>
                    {device.status}
                  </span>
                </td>
                <td style={styles.td}>{device.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageContainer>
  );
}

const styles = {
  pageTitle: {
    fontSize: '28px',
    color: '#0a3a5c',
    marginBottom: '20px',
  },
  tableContainer: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    border: '1px solid #e0e0e0',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#f0f8ff',
    padding: '12px',
    fontSize: '16px',
    color: '#0a3a5c',
    borderBottom: '2px solid #1E88E5',
    textAlign: 'left',
  },
  td: {
    padding: '12px',
    borderBottom: '1px solid #e0e0e0',
    color: '#333',
  },
};

export default DevicesPage;