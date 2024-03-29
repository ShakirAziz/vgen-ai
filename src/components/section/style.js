import { makeStyles } from "@mui/styles";
// import imageone from "../../Assets/images/backgroundimage.png";
export const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    alignItems: "center",
    height: "321.43px",
    flexDirection: "column",
    justifyContent: "center",
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "530.82px",
    height: "43.11px",
    fontSize: "40.61px !important",
    letterSpacing: "1px",
    fontWeight: "900",
    color: "rgba(255, 255, 255, 1) !important",
    textTransform: "uppercase",
  },
  description: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "700.04px",
    height: "93.76px",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: "15.9px",
    lineHeight: "19.16px",
    fontWeight: "300",
    color: "rgba(255, 255, 255, 0.53)!important",
  },
}));
