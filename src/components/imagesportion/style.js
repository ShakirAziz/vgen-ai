import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  maincontainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "0px 100px 0px 20px !important",
  },
  textcontainer: {
    paddingTop: "70px",
    display: "flex",
    flexDirection: "column",
    gap: "3.933px",
  },
  mainhead: {
    color: "var(--pixlr-com-olive, #7286FF)",
    fontFamily: "Montserrat",
    fontSize: "10.588px !important",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "14.824px !important",
    letterSpacing: "3.025px !important",
    textTransform: "uppercase",
  },
  description: {
    color: "var(--pixlr-com-nero-933, rgba(255, 255, 255, 0.93))",
    fontFamily: "Montserrat",
    fontSize: "24.202px !important",
    fontStyle: "normal",
    marginBottom: "6px !important",
    fontWeight: 900 + "!important",
    lineHeight: "normal !important",
  },
  paragraph: {
    color: "#FFFFFFBB !important",
    fontFamily: "Montserrat",
    fontSize: "12.101px",
    fontStyle: "normal",
    fontWeight: 400 + "important",
    lineWeight: "18.151px !important",
    width: "550.079px ",
  },
  imagecontainer: {
    height: "30rem",
    width: "42.3rem",
    alignItems: "center",
    display: "flex",
    position: "relative",
    justifyContent: "space-evenly",
  },
  centerimag: {
    height: "365.11px",
    width: "264.71px",
    position: "absolute",
    objectFit: "cover",
    borderRadius: "30px",
    transition: "all 0.6s ease-in-out",
  },
  leftimg: {
    height: "312.94px",
    width: "226.89px",
    objectFit: "cover",
    borderRadius: "30px",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      marginRight: "13rem !important",
    },
  },
  leftimgHovered: {
    marginRight: "2rem !important",
  },
  rightimg: {
    height: "312.94px",
    width: "226.89px",
    objectFit: "cover",
    borderRadius: "30px",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      marginLeft: "13rem !important",
    },
  },
  rightimgHovered: {
    marginLeft: "8rem !important",
  },
}));
