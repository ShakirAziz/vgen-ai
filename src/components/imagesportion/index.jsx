import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./style";
import catpic from "../../Assets/images/Cat.png";
import dogpic from "../../Assets/images/Dog.png";
import horsepic from "../../Assets/images/Horse.png";

function ImagePortion() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const classes = useStyles();

  return (
    <Box className={classes.maincontainer}>
      <Box className={classes.textcontainer}>
        <Typography className={classes.mainhead}>Generative AI</Typography>
        <Typography className={classes.description}>
          AI Image Generator magic!
        </Typography>
        <Typography className={classes.paragraph}>
          Experience the magic of VGenAI's innovative Text-to-Image AI tool,
          revolutionizing the process of turning words into captivating visuals.
          Immerse yourself in a world of creativity and craft remarkable,
          AI-generated artwork that will captivate and inspire your audience.
          Join us on a journey of artistic discovery with VGenAI's cutting-edge
          technology today!
        </Typography>
      </Box>

      <Box className={classes.imagecontainer}>
        <img
          className={`${classes.leftimg} ${
            isHovered ? classes.leftimgHovered : ""
          }`}
          src={catpic}
          alt="cat"
        />
        <img
          className={classes.centerimag}
          src={dogpic}
          alt="dog"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        <img
          className={`${classes.rightimg} ${
            isHovered ? classes.rightimgHovered : ""
          }`}
          src={horsepic}
          alt="horse"
        />
      </Box>
    </Box>
  );
}

export default ImagePortion;
