import { Box, Typography, Divider, Stack } from "@mui/material";
import TableContent from "./components/TableContent";

const Home = () => {
  return (
    <Box sx={{ m: 5 }}>
      <Stack direction="column" spacing={2}>
        <Typography variant="h4" color="initial">
          Ventas de hoy
        </Typography>
        <Divider />
        <TableContent />
      </Stack>
    </Box>
  );
};

export default Home;
