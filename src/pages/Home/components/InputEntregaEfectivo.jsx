import { InputAdornment, TextField, Tooltip } from "@mui/material"

const InputEntregaEfectivo = () => {
  return (
    <Tooltip title="Aca se añade el valor de las etiquetas de devolución">
      <TextField
        type="number"
        variant="outlined"
        size="small"
        label="Valor"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              sx={{ width: "7rem" }}
      />
    </Tooltip>
  );
}
export default InputEntregaEfectivo