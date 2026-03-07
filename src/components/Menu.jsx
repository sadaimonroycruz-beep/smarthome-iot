import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/devices">Devices</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  );
}

export default Menu;