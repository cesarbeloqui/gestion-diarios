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
        width: "50rem",
      }}
    >
      <Typography variant="body1" sx={{mb:2}}>Valor unitario de la devolucion:</Typography>
      <Tooltip title="Aca se añade el valor de las etiquetas de devolución">
        <TextField
          type="number"
          variant="outlined"
          size="small"
          label="Valor"
          sx={{ width: "8rem" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </Tooltip>
    </Box>
  );
};
export default InputValorDeDevolucion;
