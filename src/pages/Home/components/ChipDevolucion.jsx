import * as React from "react";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/material";
import { green } from "@mui/material/colors";

export default function ChipDevolucion() {
  const [chipData, setChipData] = React.useState([
    {
      key: 0,
      label: "Devolvió: 5<br>Efectivo a favor: $1525",
      devolucion: 5,
      efectivo: 1540,
    },
    {
      key: 1,
      label: "Devolvió: 6<br>Efectivo a favor: $2000",
      devolucion: 6,
      efectivo: 2000,
    },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: 200,
        p: 0.5,
        m: 0,
      }}
    >
      {chipData.map((data) => {
        return (
          <Chip
            /*             variant="outlined" */
            key={data.key}
            color="success"
            label={
              <p
                dangerouslySetInnerHTML={{
                  __html: `Devolvió: ${data.devolucion}<br>Efectivo a favor: $${data.efectivo}`,
                }}
              />
            }
            sx={{ m: 0.5 }}
            style={{ whiteSpace: "normal", padding: "20px 0px" }}
            onDelete={handleDelete(data)}
          />
        );
      })}
    </Box>
  );
}
