import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material/";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";
const InputCantidad = () => {
  const [showcantidad, setShowcantidad] = useState(false);

  const handleClickShowcantidad = () => setShowcantidad((show) => !show);

  const handleMouseDowncantidad = (event) => {
    event.preventDefault();
  };

  return (
    /*     <Box sx={{ display: "flex", justifyContent: "center" }}>
      <RemoveIcon />
      <input type="number" value="1" />
      <AddIcon />
      </Box> */
    <FormControl variant="outlined">
      <InputLabel htmlFor="outlined-adornment-cantidad">Cantidad</InputLabel>
      <OutlinedInput
        id="outlined-adornment-cantidad"
        type="number"
        label="Cantidad"
      />
    </FormControl>
  );
};

export default InputCantidad;
