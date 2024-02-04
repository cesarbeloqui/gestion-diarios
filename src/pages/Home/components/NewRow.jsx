import { TableCell, TableRow } from "@mui/material";
import React from "react";
import ComboBox from "./ComboBox";
import InputCantidad from "./InputCantidad";

const NewRow = () => {
  return (
    <TableRow hover role="checkbox" tabIndex={-1}>
      <TableCell align="left">
        <ComboBox />
      </TableCell>
      <TableCell align="left">
        <InputCantidad />
      </TableCell>
      <TableCell align="center">Sin Cargo</TableCell>
      <TableCell align="center">Entregó</TableCell>
      <TableCell align="center">Detalle</TableCell>
      <TableCell align="center">Editar</TableCell>
    </TableRow>
  );
};

export default NewRow;
