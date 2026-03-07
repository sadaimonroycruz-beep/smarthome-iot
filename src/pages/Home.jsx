import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{textAlign:"center", padding:"50px"}}>
      <h1>SmartHome IoT</h1>
      <p>Control y monitoreo de sensores inteligentes</p>

      <Link to="/dashboard">
        <button style={{padding:"10px 20px", marginTop:"20px"}}>
          Ir al Dashboard
        </button>
      </Link>
    </div>
  );
};

export default Home;