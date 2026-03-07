import { Container, Typography } from "@mui/material";

function PageContainer({ title, children }) {
  return (
    <Container sx={{ mt: 4 }}>

      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>

      {children}

    </Container>
  );
}

export default PageContainer;