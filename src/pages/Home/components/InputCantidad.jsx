import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material/";
import { TextField } from "@mui/material";

const InputCantidad = () => {
  return (
    <TextField
      variant="outlined"
      size="small"
      id="outlined-adornment-cantidad"
      type="number"
      label="Cantidad"
    />
  );
};

export default InputCantidad;
