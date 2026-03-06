import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>SmartHome IoT</h1>

      <button onClick={() => navigate("/dashboard")}>
        IR AL DASHBOARD
      </button>
    </div>
  );
}

export default Home;