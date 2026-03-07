import { useNavigate } from 'react-router-dom';

function Portada() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.university}>UNIVERSIDAD POLITÉCNICA DE ATLACOMULCO</h1>
        <h2 style={styles.career}>Ingeniería en Sistemas Computacionales</h2>
        
        <div style={styles.infoGrid}>
          <div style={styles.infoItem}>
            <span style={styles.label}>ASIGNATURA:</span>
            <span style={styles.value}>Programación Web</span>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.label}>PRESENTADO POR:</span>
            <span style={styles.value}>Monroy Cruz Zuri Saday</span>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.label}>DOCENTE:</span>
            <span style={styles.value}>Ing. Jhovani del Boque Florentino</span>
          </div>
        </div>

        <p style={styles.date}>Atlacomulco, México a Marzo 2026</p>

        <button 
          onClick={() => navigate('/dashboard')}
          style={styles.button}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
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
    background: 'linear-gradient(135deg, #0b3b5c, #1a4e7a)', // Azul degradado
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    maxWidth: '600px',
    width: '100%',
    textAlign: 'center',
  },
  university: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#0b3b5c',
    marginBottom: '5px',
    borderBottom: '3px solid #007bff',
    paddingBottom: '10px',
  },
  career: {
    fontSize: '22px',
    color: '#1a4e7a',
    marginBottom: '30px',
    fontWeight: 'normal',
  },
  infoGrid: {
    textAlign: 'left',
    marginBottom: '30px',
  },
  infoItem: {
    marginBottom: '15px',
    padding: '10px',
    backgroundColor: '#f0f8ff',
    borderRadius: '8px',
    borderLeft: '5px solid #007bff',
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#0b3b5c',
    display: 'block',
    marginBottom: '5px',
  },
  value: {
    fontSize: '18px',
    color: '#1a4e7a',
    fontWeight: '500',
  },
  date: {
    fontSize: '18px',
    color: '#555',
    fontStyle: 'italic',
    marginTop: '20px',
    paddingTop: '20px',
    borderTop: '1px dashed #ccc',
  },
  button: {
    marginTop: '30px',
    padding: '12px 40px',
    fontSize: '18px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0,123,255,0.3)',
    transition: 'background 0.3s',
  },
};

export default Portada;