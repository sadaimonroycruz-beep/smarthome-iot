import { Link } from "react-router-dom";
import "./Menu.css"; // opcional, crea el archivo si quieres estilos

const Menu = () => {
  return (
    <nav style={{ padding: "10px", background: "#333", display: "flex", gap: "20px" }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Portada</Link>
      <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>Dashboard</Link>
      <Link to="/devices" style={{ color: "white", textDecoration: "none" }}>Devices</Link>
      <Link to="/settings" style={{ color: "white", textDecoration: "none" }}>Settings</Link>
    </nav>
  );
};

export default Menu;