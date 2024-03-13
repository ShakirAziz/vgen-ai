import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "../../Assets/logo/Logo.png";
import { makeStyles } from "@mui/styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.logo}>
        <img width="80px" src={logo} alt="logo" />
      </Box>
      <Box className={classes.para}>
        {" "}
        <Typography>VGENAI Ltd © 2024</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
const useStyles = makeStyles({
  mainContainer: {
    backgroundColor: "#0A0F20",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.2em 2em",
    flexWrap: "wrap",
    borderTop:
      "0.756px solid var(--pixlr-com-black-10, rgba(0, 0, 0, 0.10)) !important",
    background: "var(--pixlr-com-black-22, rgba(0, 0, 0, 0.22)) !important",
  },

  logo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  para: {
    color: "rgba(153, 153, 153, 1)",
    fontFamily: "Montserrat!important",
    fontWeight: "400!important",
    fontSize: "9px!important",
  },
});
