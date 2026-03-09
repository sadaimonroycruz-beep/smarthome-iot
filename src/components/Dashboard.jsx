import { Container, Grid, Card, CardContent, Typography } from "@mui/material";

export default function Dashboard() {

  const sensores = [
    { nombre: "Temperatura", valor: "24 °C" },
    { nombre: "Humedad", valor: "60 %" },
    { nombre: "Gas", valor: "Normal" },
  ];

  return (
    <Container sx={{ marginTop: 5 }}>

      <Typography variant="h4" gutterBottom>
        Dashboard Smart Home IoT
      </Typography>

      <Grid container spacing={3}>

        {sensores.map((sensor, index) => (

          <Grid item xs={12} md={4} key={index}>

            <Card>

              <CardContent>

                <Typography variant="h6">
                  {sensor.nombre}
                </Typography>

                <Typography variant="h4">
                  {sensor.valor}
                </Typography>

              </CardContent>

            </Card>

          </Grid>

        ))}

      </Grid>

    </Container>
  );
}