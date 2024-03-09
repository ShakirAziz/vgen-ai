import { Box } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import Routers from "./routes";

function App() {
  return (
    <Box>
      <RouterProvider router={Routers} />
    </Box>
  );
}

export default App;
