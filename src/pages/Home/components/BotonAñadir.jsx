import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import { Typography } from "@mui/material";

export default function BotonAñadir() {
  const añadirNuevaVenta = () => {
    console.log("Añadiendo nueva venta");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={añadirNuevaVenta}
    >
      <Fab size="small" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Typography ml={2}>Añadir nueva venta</Typography>
    </Box>
  );
}
