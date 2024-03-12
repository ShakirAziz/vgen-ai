import React from "react";
import { Typography, Box } from "@mui/material";
import { useStyles } from "./style";

const Section = () => {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Typography className={classes.heading}>Generative ai tools</Typography>
      <Typography className={classes.description}>
        Explore Pixlr’s new AI Powered Generative Tools unleashing limitless
        creative possibilities. Perfect for both beginners and seasoned
        professionals, these tools redefine artistic expression with intuitive
        AI technology, revolutionizing your creative process.
      </Typography>
    </Box>
  );
};

export default Section;
