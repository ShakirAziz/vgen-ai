import { Avatar, Box, Icon, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import logo from "../../assets/logo/Logo.png";
import BtnIcon from "../../assets/icon/magic.png";
import Button from "../button/index";

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.mainContainer}>
        <Box className={classes.logo}>
          <img width="80px" src={logo} alt="logo" />
        </Box>
        <Box className={classes.innerContainer}>
          <Typography>Home</Typography>
          <Typography>About Us</Typography>
          <Box>
            {" "}
            <Button
              variant="contained"
              sx={{
                borderRadius: "25px",
                fontSize: "14px !important",

                background:
                  "linear-gradient(rgba(148, 46, 215, 0.8), rgba(37, 169, 219, 0.7)) !important",

                padding: "5px 10px",
              }}
            >
              <span>
                <Icon>
                  <img src={BtnIcon} alt="button" />
                </Icon>
              </span>{" "}
              AI Image Generator
            </Button>
          </Box>
          <Avatar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between ",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: "0.8em 3em",
    flexWrap: "wrap",
    columnGap: "3rem",
    fontFamily: "Montserrat !important",
    fontWeight: "900 !important",
  },
  innerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: "6rem",
    color: "white",

    flexWrap: "wrap",
  },
});
