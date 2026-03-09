import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  return (
    <Container sx={{ textAlign: "center", marginTop: 10 }}>

      <Typography variant="h3" gutterBottom>
        UNIVERSIDAD POLITÉCNICA DE ATLACOMULCO
      </Typography>

      <Typography variant="h5">
        INGENIERÍA EN SISTEMAS COMPUTACIONALES
      </Typography>

      <Typography variant="h6" sx={{ marginTop: 3 }}>
        PROGRAMACIÓN WEB
      </Typography>

      <Typography variant="h6" sx={{ marginTop: 5 }}>
        ALUMNO:
      </Typography>

      <Typography variant="h5">
        ZURI SADAY MONROY CRUZ
      </Typography>

      <Typography variant="h6" sx={{ marginTop: 5 }}>
        ING:
      </Typography>

      <Typography variant="h5">
        JHOVANI DEL BOQUE FLORENTINO
      </Typography>

      <Button
        variant="contained"
        sx={{ marginTop: 6 }}
        onClick={() => navigate("/dashboard")}
      >
        Ir al Dashboard
      </Button>

    </Container>
  );
}