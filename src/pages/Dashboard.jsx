import PageContainer from "../components/PageContainer/PageContainer";

const Dashboard = () => {
  return (
    <PageContainer title="IoT para Hogares Inteligentes">
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <div style={{ background: "white", padding: "20px", borderRadius: "8px", flex: 1, textAlign: "center", fontSize: "32px" }}>600</div>
        <div style={{ background: "white", padding: "20px", borderRadius: "8px", flex: 1, textAlign: "center", fontSize: "32px" }}>450</div>
        <div style={{ background: "white", padding: "20px", borderRadius: "8px", flex: 1, textAlign: "center", fontSize: "32px" }}>300</div>
        <div style={{ background: "white", padding: "20px", borderRadius: "8px", flex: 1, textAlign: "center", fontSize: "32px" }}>150</div>
        <div style={{ background: "white", padding: "20px", borderRadius: "8px", flex: 1, textAlign: "center", fontSize: "32px" }}>0</div>
      </div>
      <div style={{ background: "white", padding: "20px", borderRadius: "8px" }}>
        <h3>Ene - Febrero - Mar</h3>
      </div>
    </PageContainer>
  );
};

export default Dashboard;