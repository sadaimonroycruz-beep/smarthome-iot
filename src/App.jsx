import { Routes, Route } from "react-router-dom"
import Portada from "./pages/Portada"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Devices from "./pages/Devices"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portada />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/devices" element={<Devices />} />
    </Routes>
  )
}

export default App