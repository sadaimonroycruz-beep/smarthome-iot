import React from "react";

const Dashboard = () => {
  return (
    <div style={{padding:"40px"}}>
      <h1>Dashboard</h1>

      <div style={{
        display:"flex",
        gap:"20px",
        marginTop:"30px"
      }}>
        <div style={{background:"#1e3a8a",color:"white",padding:"20px",borderRadius:"10px"}}>
          Active Devices: 20
        </div>

        <div style={{background:"#1e3a8a",color:"white",padding:"20px",borderRadius:"10px"}}>
          Alerts: 15
        </div>

        <div style={{background:"#1e3a8a",color:"white",padding:"20px",borderRadius:"10px"}}>
          Users: 4
        </div>
      </div>
    </div>
  );
};

export default Dashboard;