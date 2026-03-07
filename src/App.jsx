import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portada from './pages/Portada';
import Dashboard from './pages/Dashboard';
import DevicesPage from './pages/DevicesPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portada />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/devices" element={<DevicesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;