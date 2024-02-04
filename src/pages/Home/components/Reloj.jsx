import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const Reloj = () => {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const options = {
    hour: "2-digit",
    minute: "2-digit",
  };
  return (
    <Box sx={{}}>
      <Typography variant="h6">
        La hora actual es: {hora.toLocaleTimeString("es-ES", options)}
      </Typography>
    </Box>
  );
};

export default Reloj;
