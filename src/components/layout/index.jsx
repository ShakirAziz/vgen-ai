import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "../footer";
const Layout = () => {
  return (
    <Box sx={{ backgroundColor: "#0A0F20" }}>
      <Box>
        <Box
          sx={{
            minHeight: "100vh",
          }}
        >
          <Outlet />
        </Box>
        <Footer />
        {/* <LoginError open={!isAuthenticated} /> */}
      </Box>
    </Box>
  );
};
export default Layout;
