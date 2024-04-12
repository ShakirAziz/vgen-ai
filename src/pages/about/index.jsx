import React from "react";
import Header from "../../components/header";
import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Box className={classes.mainContainer}>
        <Typography className={classes.title}>About VGENAI!</Typography>
        <Box className={classes.para}>
          Welcome to VGenAI, where words come to life through visuals! Our
          platform transforms text into stunning images, offering a seamless
          creative outlet for expressing ideas. With customizable designs,
          diverse styles, and easy sharing options, VGenAI empowers users across
          various domains to effortlessly create and share visually captivating
          content. Whether you're a content creator, marketer, educator, or
          simply someone who appreciates creativity, join us and unlock the
          power of visual storytelling today!
        </Box>
      </Box>
    </>
  );
};

export default About;
const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center ",
    alignItems: "center",
    height: "400px",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFFFF",
    fontSize: "60.2px !important",
    fontFamily: "Montserrat!important",
    fontWeight: "900!important",
    textTransform: "uppercase",
    letterSpacing: "1px!important",
  },
  para: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "650.04px",
    textAlign: "center",
    fontWeight: "600!important",
    fontSize: "16px!important",
    color: "rgba(153, 153, 153, 1)",
    lineHeight: "18px!important",
  },
});
