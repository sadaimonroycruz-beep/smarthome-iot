import { useState } from 'react';
import PageContainer from '../components/PageContainer';

function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [temperatureUnit, setTemperatureUnit] = useState('celsius');

  return (
    <PageContainer title="Settings - Monroy Cruz Zuri Saday">
      <h2 style={styles.pageTitle}>Configuración</h2>
      <div style={styles.settingsContainer}>
        <div style={styles.settingItem}>
          <span style={styles.settingLabel}>Notificaciones</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            style={styles.checkbox}
          />
        </div>
        <div style={styles.settingItem}>
          <span style={styles.settingLabel}>Modo Oscuro</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            style={styles.checkbox}
          />
        </div>
        <div style={styles.settingItem}>
          <span style={styles.settingLabel}>Unidad de Temperatura</span>
          <select
            value={temperatureUnit}
            onChange={(e) => setTemperatureUnit(e.target.value)}
            style={styles.select}
          >
            <option value="celsius">Celsius (°C)</option>
            <option value="fahrenheit">Fahrenheit (°F)</option>
          </select>
        </div>
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
  settingsContainer: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    border: '1px solid #e0e0e0',
    maxWidth: '600px',
  },
  settingItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 0',
    borderBottom: '1px solid #eee',
  },
  settingLabel: {
    fontSize: '18px',
    color: '#0a3a5c',
  },
  checkbox: {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
  },
  select: {
    padding: '8px 12px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    backgroundColor: '#f9f9f9',
    color: '#333',
    cursor: 'pointer',
  },
};

export default SettingsPage;