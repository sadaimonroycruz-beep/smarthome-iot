import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FiActivity, FiAlertCircle, FiUsers } from 'react-icons/fi';

function Dashboard() {
  // Datos de ejemplo para el gráfico
  const sensorData = [
    { time: '12:00', gas: 30, temp: 22 },
    { time: '12:10', gas: 45, temp: 24 },
    { time: '12:20', gas: 28, temp: 23 },
    { time: '12:30', gas: 50, temp: 25 },
    { time: '12:40', gas: 40, temp: 22 },
  ];

  // Fecha y hora (puedes usar new Date() para obtener la actual)
  const currentDateTime = "05:36 p. m. 06/03/2026";

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Encabezado con navegación */}
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderBottom: '2px solid #eee', 
        paddingBottom: '10px',
        marginBottom: '20px'
      }}>
        <h1 style={{ fontSize: '24px', color: '#333' }}>IoT Dashboard - Tu Nombre</h1>
        <nav>
          <Link to="/dashboard" style={{ margin: '0 15px', textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Dashboard</Link>
          <Link to="/devices" style={{ margin: '0 15px', textDecoration: 'none', color: '#555' }}>Devices</Link>
          <Link to="/settings" style={{ margin: '0 15px', textDecoration: 'none', color: '#555' }}>Settings</Link>
        </nav>
      </header>

      {/* Tarjetas de estadísticas */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' }}>
        <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', textAlign: 'center' }}>
          <FiActivity size={30} color="#007bff" />
          <h3 style={{ margin: '10px 0 5px', fontSize: '18px', color: '#555' }}>Devices Active</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', margin: 0, color: '#333' }}>20</p>
        </div>
        <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', textAlign: 'center' }}>
          <FiAlertCircle size={30} color="#dc3545" />
          <h3 style={{ margin: '10px 0 5px', fontSize: '18px', color: '#555' }}>Alerts</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', margin: 0, color: '#333' }}>15</p>
        </div>
        <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', textAlign: 'center' }}>
          <FiUsers size={30} color="#28a745" />
          <h3 style={{ margin: '10px 0 5px', fontSize: '18px', color: '#555' }}>Users</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', margin: 0, color: '#333' }}>4</p>
        </div>
      </div>

      {/* Gráfico */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '15px', color: '#333' }}>Sensor Monitoring</h2>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
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
        </div>
      </div>

      {/* Pie */}
      <footer style={{ 
        borderTop: '1px solid #ddd', 
        paddingTop: '15px', 
        marginTop: '20px',
        textAlign: 'right',
        fontSize: '14px',
        color: '#666'
      }}>
        <span>ESP LAA  {currentDateTime}</span>
      </footer>
    </div>
  );
}

export default Dashboard;