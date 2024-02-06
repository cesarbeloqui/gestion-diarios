import {
  Box,
  InputAdornment,
  OutlinedInput,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

const InputValorDeDevolucion = () => {
  return (
    <Box
      sx={{
        ml: 4,
        width: "7rem",
      }}
    >
      <Tooltip title="Aca se añade el valor de las etiquetas de devolución">
        <TextField
          type="number"
          variant="outlined"
          size="small"
          label="Valor"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </Tooltip>
    </Box>
  );
};
export default InputValorDeDevolucion;
