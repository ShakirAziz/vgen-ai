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
          Pixlr.com was launched in the late summer of 2008 as an online image
          editing tool developed by Ola Sevandersson. Initially offering a
          web-based platform for basic photo editing, it quickly gained
          popularity due to its user-friendly interface and accessible features.
          As Pixlr evolves, it infuses AI into the platform to make user’s
          creative process faster, smarter, and easier. Explore a world where
          your imagination has no limits, and every creative artwork is a
          possibility.
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
