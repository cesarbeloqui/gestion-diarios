import { Box, Typography, Divider, Stack } from "@mui/material";
import TableContent from "./components/TableContent";
import Reloj from "./components/Reloj";
import Header from "./components/Header";
import BotonAñadir from "./components/BotonAñadir";

const Home = () => {
  return (
    <Box sx={{ m: 5 }}>
      <Stack direction="column" spacing={2}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Header />
          <Reloj />
        </Box>

        <Divider />
        <TableContent />
      </Stack>
    </Box>
  );
};

export default Home;
