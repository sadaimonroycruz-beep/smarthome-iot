import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Dashboard() {
  // Datos de ejemplo (ajusta según necesites)
  const sensorData = [
    { time: '12:00', gas: 30, temp: 22 },
    { time: '12:10', gas: 45, temp: 24 },
    { time: '12:20', gas: 28, temp: 23 },
    { time: '12:30', gas: 50, temp: 25 },
    { time: '12:40', gas: 40, temp: 22 },
  ];

  const currentDateTime = "05:36 p. m. 06/03/2026";

  return (
    <div style={styles.container}>
      {/* Encabezado */}
      <header style={styles.header}>
        <h1 style={styles.title}>IoT Dashboard - Monroy Cruz Zuri Saday</h1>
        <nav style={styles.nav}>
          <Link to="/dashboard" style={{...styles.navLink, ...styles.activeLink}}>Dashboard</Link>
          <Link to="/devices" style={styles.navLink}>Devices</Link>
          <Link to="/settings" style={styles.navLink}>Settings</Link>
        </nav>
      </header>

      {/* Tarjetas de estadísticas (estilo simple, sin íconos) */}
      <div style={styles.cardsContainer}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Devices Active</h3>
          <p style={styles.cardValue}>20</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Alerts</h3>
          <p style={styles.cardValue}>15</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Users</h3>
          <p style={styles.cardValue}>4</p>
        </div>
      </div>

      {/* Gráfico Sensor Monitoring */}
      <div style={styles.chartContainer}>
        <h2 style={styles.chartTitle}>Sensor Monitoring</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={sensorData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="time" stroke="#555" />
            <YAxis yAxisId="left" stroke="#555" />
            <YAxis yAxisId="right" orientation="right" stroke="#555" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="gas" stroke="#1E88E5" name="Gas Level" strokeWidth={2} />
            <Line yAxisId="right" type="monotone" dataKey="temp" stroke="#0D47A1" name="Temperature (°C)" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie */}
      <footer style={styles.footer}>
        <span>ESP LAA  {currentDateTime}</span>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f5f9ff',
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #1E88E5',
    paddingBottom: '10px',
    marginBottom: '30px',
  },
  title: {
    fontSize: '24px',
    color: '#0b3b5c',
    margin: 0,
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#555',
    fontSize: '16px',
    padding: '5px 10px',
    borderRadius: '4px',
    transition: 'background 0.3s',
  },
  activeLink: {
    color: '#1E88E5',
    fontWeight: 'bold',
    borderBottom: '2px solid #1E88E5',
  },
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginBottom: '40px',
  },
  card: {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    textAlign: 'center',
    border: '1px solid #e0e0e0',
  },
  cardTitle: {
    fontSize: '18px',
    color: '#1E88E5',
    margin: '0 0 10px 0',
    fontWeight: '500',
  },
  cardValue: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#0b3b5c',
    margin: 0,
  },
  chartContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    marginBottom: '30px',
    border: '1px solid #e0e0e0',
  },
  chartTitle: {
    fontSize: '20px',
    color: '#0b3b5c',
    margin: '0 0 20px 0',
  },
  footer: {
    borderTop: '1px solid #ccc',
    paddingTop: '15px',
    textAlign: 'right',
    fontSize: '14px',
    color: '#666',
  },
};

export default Dashboard;