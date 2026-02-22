import { Container, Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"

function Home() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        SmartHome IoT
      </Typography>

      <Button
        variant="contained"
        component={Link}
        to="/dashboard"
      >
        Ir al Dashboard
      </Button>
    </Container>
  )
}

export default Home