import React from "react";
import Burner from "../../components/burnerportion";
import { Box } from "@mui/material";
import Section from "../../components/section";
import Header from "../../components/header";
import ImagePortion from "../../components/imagesportion";

const Homepage = () => {
  return (
    <Box
      sx={{
        background:
          "var(--pixlr-com-ebony-radial-portage-portage, radial-gradient(40% 40% at 60% 20%, rgba(119, 138, 232, 0.25) 0%, rgba(119, 138, 232, 0) 80%), #0A0F20)",
      }}
    >
      <Header />
      <Burner />

      <Section />
      <ImagePortion />
    </Box>
  );
};

export default Homepage;
