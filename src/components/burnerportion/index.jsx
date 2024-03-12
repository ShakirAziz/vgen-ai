import { Box, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./style";
import Button from "../button";
import magicbutton from "../../assets/icon/magic.png";
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
          The suite for all your creative photo and design editing needs
          directly in your web browser, on your smartphone, or on your desktop,
          all free. The only limit is your imagination!
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
