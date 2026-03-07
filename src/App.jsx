import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Portada from "./pages/Portada";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Devices from "./pages/Devices";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Routes>

        {/* PORTADA */}
        <Route path="/" element={<Portada />} />

        {/* HOME */}
        <Route path="/home" element={<Home />} />

        {/* DASHBOARD */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* DEVICES */}
        <Route path="/devices" element={<Devices />} />

        {/* SETTINGS */}
        <Route path="/settings" element={<Settings />} />

      </Routes>
    </Router>
  );
}

export default App;