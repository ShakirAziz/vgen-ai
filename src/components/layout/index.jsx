import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "../footer";
import Header from "../header";
const Layout = () => {
  return (
    <Box sx={{ backgroundColor: "#13082A" }}>
      <Box
        sx={{
          background:
            "var(--pixlr-com-ebony-radial-portage-portage, radial-gradient(40% 40% at 58% 20%, rgba(119, 138, 232, 0.30) 0%, rgba(119, 138, 232, 0.00) 100%), #0A0F20)",
        }}
      >
        <Header />
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
