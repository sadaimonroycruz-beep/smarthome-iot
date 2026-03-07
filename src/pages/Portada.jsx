import { useNavigate } from "react-router-dom";

export default function Portada() {

  const navigate = useNavigate();

  return (
    <div style={{
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      background:"#0e3a57"
    }}>

      <div style={{
        background:"white",
        padding:"40px",
        borderRadius:"12px",
        textAlign:"center",
        width:"400px"
      }}>

        <h2>UNIVERSIDAD POLITÉCNICA DE ATLACOMULCO</h2>

        <p>Ingeniería en Sistemas Computacionales</p>

        <p><b>Asignatura:</b> Programación Web</p>

        <p><b>Alumno:</b> Zuri Saday Monroy Cruz</p>

        <p><b>Docente:</b> Ing. Jhovani del Boque Florentino</p>

        <button
          onClick={()=>navigate("/dashboard")}
          style={{
            marginTop:"20px",
            padding:"10px 20px",
            background:"#1976d2",
            color:"white",
            border:"none",
            borderRadius:"8px",
            cursor:"pointer"
          }}
        >
          Entrar al Dashboard
        </button>

      </div>
    </div>
  )
}