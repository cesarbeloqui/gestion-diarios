import { TableCell, TableRow } from "@mui/material";
import ComboBox from "./ComboBox";
import InputCantidad from "./InputCantidad";
import GreenSwitch from "./GreenSwitch";
import InputEntregaEfectivo from "./InputEntregaEfectivo";
import ChipDevolucion from "./ChipDevolucion";
import InputDetalle from "./InputDetalle";
import BotonCancelar from "./BotonCancelar";
import InputCantidadDevolucion from "./InputCantidadDevolucion";

const NewRow = () => {
  const handleDelete = () => {
    console.log("estoy eliminando una devolucion");
  };
  return (
    <TableRow hover role="checkbox" tabIndex={-1}>
      <TableCell align="left">
        <ComboBox />
      </TableCell>
      <TableCell align="left" style={{ maxWidth: 50, minWidth: 50 }}>
        <InputCantidad />
      </TableCell>
      <TableCell align="center">
        <GreenSwitch />
      </TableCell>
      <TableCell align="center">
        <InputEntregaEfectivo />
      </TableCell>
      <TableCell align="center">
        <InputCantidadDevolucion/>
        <ChipDevolucion handleDelete={handleDelete} />
      </TableCell>
      <TableCell align="center"><InputDetalle/></TableCell>
      <TableCell align="center"><BotonCancelar/></TableCell>
    </TableRow>
  );
};

export default NewRow;
