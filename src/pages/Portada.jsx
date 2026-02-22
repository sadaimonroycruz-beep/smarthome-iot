import { Container, Typography, Button, Box } from "@mui/material"
import { Link } from "react-router-dom"

function Portada() {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(135deg, #0d47a1, #1976d2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: 3
      }}
    >
      <Container>
        <Typography variant="h3" gutterBottom>
          SmartHome IoT
        </Typography>

        <Typography variant="h6" gutterBottom>
          Sistema Inteligente de Monitoreo
        </Typography>

        {/* 👇 TUS DATOS */}
        <Box mt={4}>
          <Typography>Desarrollado por: <strong>Zuri Saday Monroy Cruz</strong></Typography>
          <Typography>Ingeniería en Sistemas Computacionales</Typography>
          <Typography>Materia: Desarrollo Web</Typography>
          <Typography>Profesor: Jovani del Boque Florentino </Typography>
          <Typography>Fecha: Febrero 2026</Typography>
        </Box>

        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/home"
          sx={{ mt: 4, backgroundColor: "white", color: "#0d47a1" }}
        >
          Entrar al sistema
        </Button>
      </Container>
    </Box>
  )
}

export default Portada