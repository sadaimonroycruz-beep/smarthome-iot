import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home(){

    const navigate = useNavigate();

    return(
        <Box
        sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            height:"100vh"
        }}
        >

        <Typography variant="h3">
            SmartHome IoT
        </Typography>

        <Button
            variant="contained"
            sx={{mt:3}}
            onClick={()=>navigate("/dashboard")}
        >
            IR AL DASHBOARD
        </Button>

        </Box>
    )
}