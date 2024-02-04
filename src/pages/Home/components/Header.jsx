import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import esLocale from "date-fns/locale/es";
const Header = () => {
  const [fecha, setFecha] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFecha(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatoFecha = "EEEE, d " + "'de' MMMM 'del' y";
  return (
    <Box>
      <Typography variant="h5" color="initial">
        Ventas de hoy: {format(fecha, formatoFecha, { locale: esLocale })}
      </Typography>
    </Box>
  );
};

export default Header;
