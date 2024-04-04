import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./style";
import catpic from "../../assets/images/Cat.png";
import dogpic from "../../assets/images/Dog.png";
import horsepic from "../../assets/images/Horse.png";

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
          Elevate your creations with the revolutionary Text to Image AI image
          generator, revolutionizing the way you convert simple text into
          visually captivating artwork. Unleash your imagination and craft
          breathtaking, AI-generated masterpieces that are bound to captivate
          and inspire your audience.
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
