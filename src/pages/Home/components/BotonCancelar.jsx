import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const ColorButton = styled(IconButton)(({ theme }) => ({
  color: red[500],
  "&:hover": {
    backgroundColor: red[100],
  },
}));

export default function BotonCancelar() {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <ColorButton aria-label="cancelar" variant="contained">
        <CloseIcon />
      </ColorButton>
    </Stack>
  );
}
