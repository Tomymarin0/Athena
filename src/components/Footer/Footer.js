import React from "react";
import { Box, Typography, Link } from "@mui/material";


const Footer = () => {
  return (
    <Box 
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "20px 0",
        textAlign: "center",
        fontSize: "1em",
      }}
    >
      <Typography variant="h6" >Pie de Página</Typography>
      <Typography variant="body2">
        © {new Date().getFullYear()} Athena Education | Todos los derechos reservados
      </Typography>
      <Link href="/politica-de-privacidad" color="inherit" style={{ marginLeft: "10px", marginRight: "10px" }}>
        Política de Privacidad
      </Link>
      <Link href="/terminos-y-condiciones" color="inherit">
        Términos y Condiciones
      </Link>
    </Box>
  );
};

export default Footer;
