import { Link } from "react-router-dom";

export default function Home(){

  return(
    <div style={{padding:"30px"}}>

      <h1>IoT para Hogares Inteligentes</h1>

      <Link to="/devices">Configuración de los dispositivos</Link>

      <br/>
      <br/>

      <Link to="/dashboard">Panel de control</Link>

    </div>
  )

}