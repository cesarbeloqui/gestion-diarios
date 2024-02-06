import { Box, IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const InputCantidadDevolucion = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
      <TextField
        variant="outlined"
        size="small"
        id="outlined-adornment-cantidad"
        type="number"
        label="Cantidad unitaria"
      />
      <IconButton aria-label="delete" size="small">
        <AddIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
};
export default InputCantidadDevolucion;
