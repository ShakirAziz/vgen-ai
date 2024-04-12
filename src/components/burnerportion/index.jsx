import { Box, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./style";
import Button from "../button";
import magicbutton from "../../Assets/icons/magic.png";
import { Link } from "react-router-dom";

const Burner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px 0px 0px 0px",
        }}
      >
        <Typography className={classes.heading}>VGENAI</Typography>
        <Typography className={classes.description}>
          AI Image Generator
        </Typography>
        <Typography className={classes.paragraph}>
          Transforming Ideas into Visual Masterpieces. Harness the power of
          artificial intelligence to create stunning images effortlessly.
          Customize styles, colors, and elements to bring your vision to life.
          Perfect for content creators, marketers, and educators. Elevate your
          visual storytelling with ease!
        </Typography>
        <Button
          className={classes.button}
          component={Link}
          to="/createAiImage"
          startIcon={<img src={magicbutton} alt="magicimage" />}
        >
          Ai Image Generator
        </Button>
      </Box>
    </Box>
  );
};

export default Burner;
