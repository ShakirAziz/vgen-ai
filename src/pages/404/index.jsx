import { Box, Typography } from "@mui/material";
import Button from "../../components/button";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Box
      sx={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        pt: 15,
        pb: 5,
        bgcolor: "primary.main",
        height: "calc(100vh - 160px)",
      }}
    >
      <Box>
        <Typography variant="h1" sx={{ color: "#fff", fontWeight: 900 }}>
          4
          <span
            style={{
              background: "linear-gradient(90deg, #C094DC 0%, #63B5E4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            0
          </span>
          4
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ color: "#fff" }}>
          The page you are looking for might have been removed had its <br />
          name changed or is temporarily unavaible
        </Typography>
      </Box>
      <Box sx={{ pt: 5 }}>
        <Button variant="contained" component={Link} to="/">
          <Typography variant="h6">Home</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Error404;
