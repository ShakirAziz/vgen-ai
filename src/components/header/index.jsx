import { Avatar, Box, Icon } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import logo from "../../assets/logo/Logo.png";
import BtnIcon from "../../assets/icons/magic.png";
import Button from "../button/index";
import { Link } from "react-router-dom";

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.mainContainer}>
        <Box className={classes.logo}>
          <Link to="/">
            <img width="80px" src={logo} alt="logo" />
          </Link>
        </Box>
        <Box className={classes.innerContainer}>
          <Link to="/" className={classes.linkStyle}>
            Home
          </Link>
          <Link to="/about" className={classes.linkStyle}>
            About
          </Link>
          <Box>
            {" "}
            <Button
              variant="contained"
              component={Link}
              to="/createAiImage"
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
    backgroundColor: "transparent !important",
    width: "100%",
    justifyContent: "space-between ",
    alignItems: "center",
    padding: "0.8em 3em",
    flexWrap: "wrap",
    columnGap: "3rem",
    fontFamily: "Montserrat !important",
    fontWeight: "900 !important",
    position: "sticky",
    top: 0,
  },
  innerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: "6rem",
    color: "white",
    flexWrap: "wrap",
  },
  linkStyle: {
    textDecoration: "none",
    color: "white",
    // Add any other styles as needed
  },
});
