import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">

      <h1>IoT Monitoring System</h1>
      <h2>Proyecto de Sensores Inteligentes</h2>

      <p>
        Plataforma para monitorear sensores de temperatura y gas en tiempo real
      </p>

      <Link to="/dashboard">
        <button className="btn">
          Ir al Dashboard
        </button>
      </Link>

    </div>
  );
}