import { useNavigate } from 'react-router-dom';

function Portada() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.university}>UNIVERSIDAD POLITÉCNICA DE ATLACOMULCO</h1>
        <h2 style={styles.career}>Ingeniería en Sistemas Computacionales</h2>

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
    width: '100%',
    background: 'linear-gradient(135deg, #0a3a5c, #1e5a7a)',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  card: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
    maxWidth: '600px',
    width: '100%',
    textAlign: 'center',
  },
  university: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#0a3a5c',
    marginBottom: '10px',
    borderBottom: '3px solid #007bff',
    paddingBottom: '10px',
  },
  career: {
    fontSize: '22px',
    color: '#1e5a7a',
    marginBottom: '30px',
    fontWeight: 'normal',
  },
  infoItem: {
    textAlign: 'left',
    marginBottom: '20px',
    padding: '10px 15px',
    backgroundColor: '#f0f8ff',
    borderRadius: '10px',
    borderLeft: '6px solid #007bff',
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#0a3a5c',
    display: 'block',
    marginBottom: '5px',
  },
  value: {
    fontSize: '20px',
    color: '#1e5a7a',
    fontWeight: '500',
  },
  date: {
    fontSize: '18px',
    color: '#555',
    fontStyle: 'italic',
    marginTop: '25px',
    paddingTop: '20px',
    borderTop: '1px dashed #ccc',
  },
  button: {
    marginTop: '30px',
    padding: '14px 45px',
    fontSize: '20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    boxShadow: '0 5px 10px rgba(0,123,255,0.4)',
    transition: 'background 0.3s',
  },
};

export default Portada;