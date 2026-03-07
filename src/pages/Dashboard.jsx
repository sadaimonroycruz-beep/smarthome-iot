import PageContainer from '../components/PageContainer';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Dashboard() {
  const sensorData = [
    { time: '12:00', gas: 60, temp: 28 },
    { time: '12:10', gas: 45, temp: 21 },
    { time: '12:20', gas: 30, temp: 14 },
    { time: '12:30', gas: 40, temp: 18 },
    { time: '12:40', gas: 35, temp: 16 },
  ];

  return (
    <PageContainer title="IoT Dashboard - Monroy Cruz Zuri Saday">
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
    </PageContainer>
  );
}

const styles = {
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
};

export default Dashboard;