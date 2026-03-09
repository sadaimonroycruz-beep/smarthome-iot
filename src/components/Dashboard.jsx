import Sidebar from "./Sidebar";
import SensorChart from "./SensorChart";

export default function Dashboard() {
  return (

    <div className="dashboard">

      <Sidebar />

      <div className="content">

        <h1>Dashboard</h1>

        <div className="cards">

          <div className="card">
            <h3>Devices</h3>
            <p>20</p>
          </div>

          <div className="card">
            <h3>Active</h3>
            <p>15</p>
          </div>

          <div className="card">
            <h3>Alerts</h3>
            <p>5</p>
          </div>

          <div className="card">
            <h3>Users</h3>
            <p>4</p>
          </div>

        </div>

        <div className="chart">

          <h3>Sensor Monitoring</h3>

          <SensorChart />

        </div>

      </div>

    </div>
  );
}