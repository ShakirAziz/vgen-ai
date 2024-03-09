import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../header";
import Footer from "../footer";
const Layout = () => {
  return (
    <Box sx={{ backgroundColor: "#13082A" }}>
      <Box>
        <Header />
        <Box
          sx={{
            minHeight: "80.25vh",
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
