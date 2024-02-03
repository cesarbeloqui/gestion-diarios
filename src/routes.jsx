import Home from "./pages/Home";
import DetallesPorNombre from "./pages/DetallesPorNombre";
import VentasOtroDia from "./pages/VentasOtroDia";
import Error from "./pages/Error";

export const routes = [
  {
    name: "Inicio",
    path: "/",
    element: <Home />,
    isVisible: true,
  },
  {
    name: "Detalles por nombre",
    path: "/detalles-por-nombre",
    element: <DetallesPorNombre />,
    isVisible: true,
  },
  {
    name: "Ventas otro dia",
    path: "/ventas-otro-dia",
    element: <VentasOtroDia />,
    isVisible: true,
  },
  {
    name: "Error",
    path: "*",
    element: <Error />,
    isVisible: false,
  },
];
