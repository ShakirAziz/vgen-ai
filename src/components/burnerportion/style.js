import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
  main: {
    background: "#11172D !important",
    display: "flex",
    alignItems: "center",
    margin: "auto",
    height: "321.43px",
    flexDirection: "column",
  },
  heading: {
    fontFamily: "pixlr.com/Linear Purple Heart Curious Blue",
    fontSize: "72.61px !important",
    letterSpacing: "1.51px !important",
    fontWeight: 900 + "!important",
    color: "transparent",
    backgroundClip: "text !important",
    background:
      "var(--pixlr-com-linear-purple-heart-curious-blue, linear-gradient(101deg, #9C26D7 0%, #1EB1DB 100%))",
  },
  description: {
    Font: "Montserrat",
    Weight: 600 + "!important",
    color: "var(--pixlr-com-nero-733, rgba(255, 255, 255, 0.73))",
    fontSize: "19.36px !important",
    LineHeight: "36.3px",
    letterSpacing: "1.51px !important",
  },
  paragraph: {
    Font: "Montserrat",
    margin: "10px 0px 30px  0px !important",
    Weight: 200 + "!important",
    color: "#FFFFFFBB",
    textAlign: "center",
    LineHeight: "54.45px !important",
    fontSize: "13.61px !important",
    width: "480px !important",
  },
  button: {
    display: "flex",
    gap: " 7.563px",

    justifyContent: "center",
    background:
      "linear-gradient(96deg, rgba(150, 44, 215, 0.22) 26.74%, rgba(36, 170, 219, 0.22) 68.86%)",
    width: "359px",
    borderRadius: "37.82px !important",
    border:
      "0.756px solid var(--pixlr-com-amethyst-34, rgba(150, 92, 201, 0.34)) !important",
  },
  buttontext: {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: "12.86px",
    color: "var(--pixlr-com-nero-80, rgba(255, 255, 255, 0.80))",
    textTransform: "capitalize",
  },
}));
