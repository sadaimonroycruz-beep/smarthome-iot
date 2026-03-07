import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Dashboard() {
  const sensorData = [
    { time: '12:00', gas: 60, temp: 28 },
    { time: '12:10', gas: 45, temp: 21 },
    { time: '12:20', gas: 30, temp: 14 },
    { time: '12:30', gas: 40, temp: 18 },
    { time: '12:40', gas: 35, temp: 16 },
  ];

  const currentDateTime = "05:36 p. m. 06/03/2026";

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>IoT Dashboard - Monroy Cruz Zuri Saday</h1>
        <nav style={styles.nav}>
          <Link to="/dashboard" style={{...styles.navLink, ...styles.activeLink}}>Devices</Link>
          <Link to="/alerts" style={styles.navLink}>Alerts</Link>
          <Link to="/users" style={styles.navLink}>Users</Link>
        </nav>
      </header>

      <main style={styles.main}>
        <div style={styles.cardsContainer}>
          <div style={styles.card}>
            <span style={styles.cardNumber}>20</span>
            <span style={styles.cardLabel}>Devices</span>
          </div>
          <div style={styles.card}>
            <span style={styles.cardNumber}>15</span>
            <span style={styles.cardLabel}>Alerts</span>
          </div>
          <div style={styles.card}>
            <span style={styles.cardNumber}>4</span>
            <span style={styles.cardLabel}>Users</span>
          </div>
        </div>

        <div style={styles.chartWrapper}>
          <h2 style={styles.chartTitle}>Sensor Monitoring</h2>
          <div style={styles.chartContainer}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={sensorData} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="time" stroke="#333" />
                <YAxis stroke="#333" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="gas" stroke="#1E88E5" name="Gas Level" strokeWidth={3} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="temp" stroke="#0D47A1" name="Temperature (°C)" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>

      <footer style={styles.footer}>
        <span>ESP LAA  {currentDateTime}</span>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#f5f9ff',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 30px',
    backgroundColor: 'white',
    borderBottom: '2px solid #1E88E5',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
  },
  title: {
    fontSize: '24px',
    color: '#0a3a5c',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '25px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#555',
    fontSize: '18px',
    padding: '5px 0',
    borderBottom: '2px solid transparent',
    transition: 'color 0.3s, border-color 0.3s',
  },
  activeLink: {
    color: '#1E88E5',
    borderBottom: '2px solid #1E88E5',
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    padding: '30px',
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
  },
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    marginBottom: '40px',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '30px 20px',
    textAlign: 'center',
    boxShadow: '0 6px 15px rgba(0,0,0,0.05)',
    border: '1px solid #e0e0e0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardNumber: {
    fontSize: '64px',
    fontWeight: 'bold',
    color: '#0a3a5c',
    lineHeight: 1,
    marginBottom: '10px',
  },
  cardLabel: {
    fontSize: '22px',
    color: '#1E88E5',
    fontWeight: '500',
  },
  chartWrapper: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '25px',
    boxShadow: '0 6px 15px rgba(0,0,0,0.05)',
    border: '1px solid #e0e0e0',
  },
  chartTitle: {
    fontSize: '24px',
    color: '#0a3a5c',
    marginBottom: '20px',
    paddingBottom: '10px',
    borderBottom: '2px solid #1E88E5',
  },
  chartContainer: {
    width: '100%',
    height: 300,
  },
  footer: {
    padding: '15px 30px',
    backgroundColor: 'white',
    borderTop: '1px solid #ccc',
    textAlign: 'right',
    fontSize: '16px',
    color: '#555',
  },
};

export default Dashboard;