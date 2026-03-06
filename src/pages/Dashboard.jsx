// Dashboard.jsx
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FiActivity, FiAlertCircle, FiUsers } from 'react-icons/fi'; // opcional

function Dashboard() {
  // Datos simulados para el gráfico
  const sensorData = [
    { time: '12:00', gas: 30, temp: 22 },
    { time: '12:10', gas: 45, temp: 24 },
    { time: '12:20', gas: 28, temp: 23 },
    { time: '12:30', gas: 50, temp: 25 },
    { time: '12:40', gas: 40, temp: 22 },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Encabezado */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <h1>IoT Dashboard - Nombre del Alumno</h1>
        <nav>
          <Link to="/dashboard" style={{ margin: '0 10px', textDecoration: 'none', color: '#007bff' }}>Dashboard</Link>
          <Link to="/devices" style={{ margin: '0 10px', textDecoration: 'none', color: '#007bff' }}>Devices</Link>
          <Link to="/settings" style={{ margin: '0 10px', textDecoration: 'none', color: '#007bff' }}>Settings</Link>
        </nav>
      </header>

      {/* Tarjetas de estadísticas */}
      <div style={{ display: 'flex', gap: '20px', margin: '30px 0' }}>
        <div style={{ flex: 1, background: '#f0f0f0', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <FiActivity size={30} />
          <h3>Devices Active</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>20</p>
        </div>
        <div style={{ flex: 1, background: '#f0f0f0', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <FiAlertCircle size={30} />
          <h3>Alerts</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>15</p>
        </div>
        <div style={{ flex: 1, background: '#f0f0f0', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <FiUsers size={30} />
          <h3>Users</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>4</p>
        </div>
      </div>

      {/* Gráfico Sensor Monitoring */}
      <h2>Sensor Monitoring</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={sensorData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="gas" stroke="#8884d8" name="Gas Level" />
          <Line yAxisId="right" type="monotone" dataKey="temp" stroke="#82ca9d" name="Temperature (°C)" />
        </LineChart>
      </ResponsiveContainer>

      {/* Pie de página */}
      <footer style={{ marginTop: '40px', textAlign: 'right', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
        <span>ESP LAA  05:36 p. m.  06/03/2026</span>
      </footer>
    </div>
  );
}

export default Dashboard;