import { useNavigate } from 'react-router-dom';

function Portada() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>UNIVERSIDAD POLITÉCNICA DE ATLACOMULCO</h1>
        <h2 style={styles.subtitle}>Ingeniería En Sistemas Computacionales</h2>

        <div style={styles.section}>
          <p style={styles.label}>ASIGNATURA:</p>
          <p style={styles.value}>Programación Web</p>
        </div>

        <div style={styles.section}>
          <p style={styles.label}>PRESENTADO POR:</p>
          <p style={styles.value}>Monroy Cruz Zuri Saday</p>
        </div>

        <div style={styles.section}>
          <p style={styles.label}>DOCENTE:</p>
          <p style={styles.value}>Ing. Jhovani del Boque Florentino</p>
        </div>

        <p style={styles.date}>Atlacomulco, México a 27 de Febrero 2026</p>

        <button 
          onClick={() => navigate('/dashboard')}
          style={styles.button}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#0056b3';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#007bff';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Entrar al Dashboard
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Gradiente moderno
    fontFamily: "'Poppins', 'Arial', sans-serif", // Tipografía moderna (asegúrate de tenerla o cambia a 'Segoe UI', etc.)
  },
  card: {
    maxWidth: '700px',
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    padding: '50px 40px',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,0.3)',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#2d3748',
    marginBottom: '0.5rem',
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: '1.8rem',
    fontWeight: 400,
    color: '#4a5568',
    marginBottom: '2rem',
    borderBottom: '2px solid #e2e8f0',
    paddingBottom: '1rem',
  },
  section: {
    marginBottom: '1.5rem',
    textAlign: 'left',
    borderLeft: '4px solid #4299e1',
    paddingLeft: '1.5rem',
  },
  label: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: '#2c5282',
    margin: '0 0 0.25rem 0',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  value: {
    fontSize: '1.5rem',
    fontWeight: 500,
    color: '#1a202c',
    margin: 0,
  },
  date: {
    marginTop: '2rem',
    fontSize: '1.2rem',
    color: '#718096',
    fontStyle: 'italic',
    borderTop: '1px dashed #cbd5e0',
    paddingTop: '1.5rem',
  },
  button: {
    marginTop: '2.5rem',
    padding: '14px 40px',
    fontSize: '1.2rem',
    fontWeight: 600,
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0,123,255,0.4)',
    transition: 'all 0.3s ease',
    outline: 'none',
    letterSpacing: '1px',
  },
};

export default Portada;