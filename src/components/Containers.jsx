import { NavLink } from 'react-router-dom';

function PageContainer({ children, title }) {
  const currentDateTime = "05:36 p. m. 06/03/2026"; // Puedes usar new Date() para dinámico

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>{title}</h1>
        <nav style={styles.nav}>
          <NavLink
            to="/dashboard"
            style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.activeLink : {}) })}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/devices"
            style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.activeLink : {}) })}
          >
            Devices
          </NavLink>
          <NavLink
            to="/settings"
            style={({ isActive }) => ({ ...styles.navLink, ...(isActive ? styles.activeLink : {}) })}
          >
            Settings
          </NavLink>
        </nav>
      </header>
      <main style={styles.main}>{children}</main>
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
  footer: {
    padding: '15px 30px',
    backgroundColor: 'white',
    borderTop: '1px solid #ccc',
    textAlign: 'right',
    fontSize: '16px',
    color: '#555',
  },
};

export default PageContainer;