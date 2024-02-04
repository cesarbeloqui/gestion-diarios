import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { IconButton, Stack } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import ComboBox from "./ComboBox";
import BotonAñadir from "./BotonAñadir";
import NewRow from "./NewRow";

const columns = [
  { id: "nombre", label: "Nombre", minWidth: 200 },
  { id: "cantidad", label: "Cantidad", minWidth: 100 },
  {
    id: "sinCargo",
    label: "Sin Cargo",
    align: "center",
    format: (value) => value.toLocaleString("es-AR"),
  },
  {
    id: "entregaDeEfectivo",
    label: "Entregó",
    align: "right",
    format: (value) => value.toLocaleString("es-AR"),
  },
  {
    id: "detalle",
    label: "Detalle",
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "editar",
    label: "Editar",
    minWidth: 70,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

function createData(
  nombre,
  cantidad,
  sinCargo,
  entregaDeEfectivo,
  detalle,
  idUser
) {
  const newSinCargo = sinCargo ? "Si" : "No";
  return {
    nombre,
    cantidad,
    sinCargo: newSinCargo,
    entregaDeEfectivo,
    detalle,
    idUser,
  };
}

const rows = [
  createData(
    "Abraham",
    4000,
    false,
    1000,
    "Loremmmsfncsdjfnsdfnsdjfnsdjfnsdkvxdcvxcvxcvxcvxvcvcvcxcvxcvxcvcxv",
    1
  ),
  createData(
    "Chipaco",
    20,
    false,
    1000,
    "Loremmmsfncsdjfnsdfnsdjfnsdjfnsdk",
    2
  ),
  createData(
    "Piedrabuena",
    7,
    false,
    1000,
    "Loremmmsfncsdjfnsdfnsdjfnsdjfnsdk",
    3
  ),
  createData("Pascual", 9, false, 1000, "Loremmmsfncsdjfnsdfnsdjfnsdjfnsdk", 4),
  createData("Rolon", 20, false, 1000, "Loremmmsfncsdjfnsdfnsdjfnsdjfnsdk", 5),
  createData(
    "Municipalidad",
    6,
    true,
    1000,
    "Loremmmsfncsdjfnsdfnsdjfnsdjfnsdk",
    6
  ),
];

export default function TableContent() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleEditItem = (idRegistro) => {
    console.log("Editando registro: ", idRegistro);
  };
  const handleRemoveItem = (idRegistro) => {
    console.log("Eliminando registro: ", idRegistro);
  };
  return (
    <Paper sx={{ width: "100%", height:"100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <BotonAñadir />
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <NewRow />
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.idUser}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      /* si el campo es el de editar añade los botones de eliminar y editar */
                      if (column.id === "editar") {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Stack direction="row" key={row.idUser} spacing={1}>
                              <IconButton
                                aria-label="edit"
                                key={`edit${column.id}`}
                                color="primary"
                                onClick={() => {
                                  handleEditItem(row.idRegistro);
                                }}
                              >
                                <EditIcon />
                              </IconButton>
                              <IconButton
                                aria-label="delete"
                                key={`remove${column.id}`}
                                color="primary"
                                onClick={() => {
                                  handleRemoveItem(row.idRegistro);
                                }}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Stack>
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
