import { Box, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./style";
import Button from "../button";
import magicbutton from "../../Assets/icons/Vector (1).svg";

const Burner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Typography className={classes.heading}>VGENAI</Typography>
      <Typography className={classes.description}>
        AI Image Generator
      </Typography>
      <Typography className={classes.paragraph}>
        The suite for all your creative photo and design editing needs directly
        in your web browser, on your smartphone, or on your desktop, all free.
        The only limit is your imagination!
      </Typography>
      <Button className={classes.button}>
        <img src={magicbutton} alt="magicimage" />
        <Typography className={classes.buttontext}>
          {" "}
          AI Image Generator
        </Typography>
      </Button>
    </Box>
  );
};

export default Burner;
