import React from "react";
import { Typography, Box } from "@mui/material";
import { useStyles } from "./style";

const Section = () => {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Typography className={classes.heading}>Generative ai tool</Typography>
      <Typography className={classes.description}>
        Introducing VGenAI's cutting-edge Generative AI Tool! Dive into a world
        of endless creative possibilities with our intuitive AI-powered feature.
        Whether you're a novice or a seasoned pro, our tool is designed to
        redefine artistic expression, revolutionizing your creative process.
        Explore the future of creativity with VGenAI today!
      </Typography>
    </Box>
  );
};

export default Section;
